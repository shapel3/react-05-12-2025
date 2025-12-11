import Heading from "../Heading/Heading";
import songs from "./data";
import Song from "./Song";
import styles from "./PlayList.module.css";

const PlayList = () => {
  const showSong = (song, index) => <Song key={index} song={song} />;
  return (
    <section>
      <Heading text="Play List" />
      <div className={styles.songs}>{songs.map(showSong)}</div>
    </section>
  );
};

export default PlayList;
