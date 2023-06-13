import React from "react";
import AlbumList from "./AlbumList.js"
import TopMenu from "./TopMenu.js";
import GenrePicker from "./GenrePicker.js";

function MainContent() {
  return (
  <main>

    <TopMenu />
    <GenrePicker />
    <AlbumList />

    </main>
  )
}

export default MainContent;
