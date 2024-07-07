export function ShowedImg({ src }) {
  return (
    <img
      className="w-[700px] h-[500px] my-3 mx-auto rounded-xl shadow-lg border-blue-100 dark:border-slate-700 border-4"
      id="showimg"
      src={src}
      alt=""
    />
  );
}
