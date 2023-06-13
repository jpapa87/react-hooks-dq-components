import React from "react";
import AlbumCard from "./AlbumCard";
import { albums } from "../data/albums";

function AlbumList() {
  const NewAlbumCard = albums.map((album) => {
    return <AlbumCard 
      key={album.id} 
      name={album.name} 
      image={album.image} 
      genre={album.genre} />
  })
  return (
  
    <section className="albums">
      {NewAlbumCard}
    </section>
);
}

export default AlbumList;
