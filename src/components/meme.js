import React, { useEffect, useState } from "react";
import Styles from "./styles.module.css";

export const Meme = () => {
  const [memes, setMemes] = useState([]);
  const [memeIndex, setMemeIndex] = useState(0);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((res) => {
        const memes = res.data.memes;
        setMemes(memes);
      });
  }, []);

  return memes.length ? (
    <div className={Styles.container}>
      <button
        onClick={() => setMemeIndex(memeIndex + 1)}
        className={Styles.next}
      >
        Next
      </button>
      <img src={memes[memeIndex].url} />
    </div>
  ) : (
    <></>
  );
};
