import { useState } from 'react';
import styles from './PlayList.module.css'

const Song = (props) => {
    const {song} = props
    const [isSelect, setIsSelect] = useState(false);
    const changeIsSelect=()=>{
         setIsSelect(!isSelect)
    }
    
    return (
        <article style={{backgroundColor:isSelect? 'orange':''}} onClick={changeIsSelect} className={styles.song}>
            <img src={song.image} alt={song.artist} />
            <h3>{song.title}</h3>
            <p>{song.artist}</p>
            <p>{song.genre}</p>
        </article>
    );
}

export default Song;
