import React, { useEffect, useState } from "react";
import Table from "./components/table";
import Header from "./components/header";
import { ShowedImg } from "./components/showedimg";

function App() {
  let data = [
    [
      "images/0017.png",
      "images/0100.png",
      "images/0133.png",
      "images/0023.png",
      "images/0060.png",
      "images/0080.png",
      "images/0094.png",
      "images/0104.png",
      "images/0120.png",
    ],
    [
      "images/0146.png",
      "images/0372.png",
      "images/0135.png",
      "images/0051.png",
      "images/0072.png",
      "images/0083.png",
      "images/0142.png",
      "images/0148.png",
      "images/0172.png",
    ],
  ];

  return (
    <div className="max-w-[1000px] my-4 mx-auto dark:bg-slate-800">
      <Header />
      <ShowedImg src="images/gallery.jpeg" />
      <Table data={data} />
    </div>
  );
}

export default App;
