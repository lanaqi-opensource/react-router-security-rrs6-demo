import { Link, Outlet } from 'react-router-dom';

import './Root.css';

import { withSecurityBlocker } from '@lanaqi/rrs6';

import 'nprogress/nprogress.css';

import NProgress from 'nprogress';

function Root() {
  return (
    <div className="root">
      <div className="left">
        <ul className="menu">
          <li>
            <Link to={'/'}>/</Link>
          </li>
          <li>
            <Link to={'/hello'}>/hello</Link>
          </li>
          <li>
            <Link to={'/sheet'}>/sheet</Link>
          </li>
          <li>
            <Link to={'/block'}>/block</Link>
          </li>
          <li>
            <Link to={'/login'}>/login</Link>
          </li>
          <li>
            <Link to={'/logout'}>/logout</Link>
          </li>
        </ul>
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default withSecurityBlocker(Root, builder => {
  return builder
    .hierarchy('superadmin>admin;admin>users;users>guest')
    .resource(rb => rb.patterns('/login', '/logout', '/denied', '/signature').anonymous().build())
    .resource(rb => rb.patterns('/sheet').permissions('admin').signatured().build())
    .resource(rb => rb.patterns('/*').authenticated().build())
    .behave({
      notAuthenticationPath: '/login',
      notSignaturePath: '/signature',
      accessDeniedPath: '/denied',
      guardBeforeFunc: (holder, stayPath, stayResource) => {
        NProgress.start();
      },
      guardAfterFunc: (holder, stayPath, blockPath, currentDecision) => {
        NProgress.done();
      },
    })
    .build();
});
