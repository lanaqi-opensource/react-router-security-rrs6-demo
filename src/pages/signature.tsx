import { useSaveSignature } from '@lanaqi/rrs6';

export default function SignaturePage() {
  const signature = useSaveSignature();
  return (
    <>
      <div className="size-full">
        <button
          type="button"
          onClick={() => {
            signature();
            console.log('执行了签名');
          }}
        >
          签名
        </button>
      </div>
    </>
  );
}
