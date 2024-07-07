export default function Cell({ src }) {
  return (
    <td>
      <img
        className="w-[50px] h-[50px] cursor-pointer rounded-lg shadow-lg border-blue-100 dark:border-slate-700 border-2 hover:border-4"
        src={src}
        alt="src"
        onClick={() => {
          let showing_image = document.getElementById("showimg");
          showing_image.src = src;
        }}
      />
    </td>
  );
}
