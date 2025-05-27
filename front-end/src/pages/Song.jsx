import React from "react";
import Player from "../components/Player";
import { Link, useParams } from "react-router-dom";
import { songsArray } from "../assets/database/songs";
import { artistArray } from "../assets/database/artists";

const Song = () => {
  const { id } = useParams();
  // console.log(id);

  const { image, name, duration, artist, audio } = songsArray.filter(
    (currentSongObj) => currentSongObj._id === id
  )[0];
  // console.log(songObj);

  const artistObj = artistArray.filter(
    (currentArtistObj) => currentArtistObj.name === artist
  )[0];
  // console.log(artistObj);

  const songsArrayFromArtist = songsArray.filter(
    (currentSongObj) => currentSongObj.artist === artist
  );
  // console.log(songsArrayFromArtist);

  const randomIndex = Math.floor(Math.random() * (songsArray.length - 1));

  const randomIndex2 = Math.floor(Math.random() * (songsArray.length - 1));

  // console.log(randomIndex, randomIndex2);

  const randomId = songsArray[randomIndex]._id;
  const randomId2 = songsArray[randomIndex2]._id;

  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img src={image} alt={`Imagem da música ${name}`} />
        </div>
      </div>

      <div className="song__bar">
        <Link to={`/artist/${artistObj._id}`} className="song__artist-image">
          <img
            width={75}
            height={75}
            src={artistObj.image}
            alt={`Imagem do Artista ${artist}`}
          />
        </Link>

        <Player
          duration={duration}
          randomId={randomId}
          randomId2={randomId2}
          audio={audio}
        />

        <div>
          <p className="song__name">{name}</p>
          <p>{artist}</p>
        </div>
      </div>
    </div>
  );
};

export default Song;
