import { useState, useEffect } from "react";
import styles from "./UploadFile.module.scss";

const UploadFile = () => {
  const [isDownload, setIsDownload] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if (isUploading === false) {
      return;
    }
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          setIsDownload(true);
          setIsUploading(false)
          return 100;
        }
        return prevProgress + 2;
      });
    }, 200);
    return () => {
      clearInterval(interval);
    };
  }, [isUploading]);
  const startDowload = () => {
    setProgress(0);
    setIsDownload(false);
    setIsUploading(true);
  };
  return (
    <article className={styles.upload}>
      <h2>Download file</h2>
      <div className={styles.progressMain}>
        <div className={styles.progress} style={{width:`${progress}%`}}></div>
      </div>
      <p>Progress {progress}%</p>
      <button onClick={startDowload} disabled={isUploading}>{isUploading?'Is uploading':'Download file'}</button>
      {isDownload && (
        <p className={styles.success}>file was successfully downloaded</p>
      )}
    </article>
  );
};

export default UploadFile;
