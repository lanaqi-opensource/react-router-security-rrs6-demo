import { HavePermission } from '@lanaqi/rrs6';

export default function SheetPage() {
  return (
    <>
      <h1>我是 SheetPage</h1>
      <HavePermission term={['admin']}>
        <h1>我是admin权限才显示</h1>
      </HavePermission>
    </>
  );
}
