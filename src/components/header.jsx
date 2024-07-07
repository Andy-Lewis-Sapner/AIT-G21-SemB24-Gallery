import { useEffect, useState } from "react";

export default function Header() {
  // const html = document.getElementById("html");
  // const [buttonText, setButtonText] = useState(
  //   html.classList.contains("dark") ? "Light" : "Dark",
  // );
  // const handleButtonClick = () => {
  //   html.classList.toggle("dark");
  //   setButtonText((prevText) => (prevText === "Light" ? "Dark" : "Light"));
  // };

  const returnToDefault = () => {
    document.getElementById("showimg").src = "images/gallery.jpeg";
  };

  return (
    <header className="text-center w-full flex flex-col rounded">
      {/* <button
        className="bg-slate-800 dark:bg-white hover:bg-slate-700 dark:hover:bg-cyan-400 text-white dark:text-black font-bold py-1 px-2 my-1 rounded max-w-[700px] w-full mx-auto"
        onClick={handleButtonClick}
      >
        {buttonText}
      </button> */}
      <h1
        className="text-3xl font-bold text-indigo-300 hover:text-indigo-400 cursor-pointer"
        onClick={returnToDefault}
      >
        Mini Gallery
      </h1>
    </header>
  );
}
