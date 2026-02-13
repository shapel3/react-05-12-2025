import { useState } from 'react';
import styles from './UploadFile.module.scss' ;

const UploadFile = () => {
    const [progress, setProgress] = useState(0);
    return (
        <article className={styles.upload}>
            <h2>Download file</h2>
            <div className={styles.progressMain}>
                <div className={styles.progress}></div>
            </div>
            <p>Progress {progress}%</p>
            <button>Download file</button>
            <p className={styles.success}>file was successfully downloaded</p>
        </article>
    );
}

export default UploadFile;
