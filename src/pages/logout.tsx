import { useLogout } from '@lanaqi/rrs6';

export default function LogoutPage() {
  const logout = useLogout();
  return (
    <>
      <div className="size-full">
        <button
          type="button"
          onClick={() => {
            logout();
            console.log('执行了登出');
          }}
        >
          Logout
        </button>
      </div>
    </>
  );
}
