import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { MatrixRainingLetters } from 'react-mdr';
import styles from '../styles/MatrixYoutubePlayer.module.css';


const MatrixYoutubePlayer = ({ videoUrl }) => {
  const [showMatrix, setShowMatrix] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowMatrix(showMatrix => !showMatrix);
      setTimeout(() => setShowMatrix(showMatrix => !showMatrix), 50);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePlay = () => setShowMatrix(true);
  const handleClose = () => setShowMatrix(false);

  return (
    <div className={styles.container}>
      <ReactPlayer
        url={videoUrl}
        playing={showMatrix}
        onPlay={handlePlay}
        controls={true}
        width="100%"
        height="30%"
        className={styles.player}
      />
      {showMatrix && (
        <div className={styles.matrixOverlay}>
          <MatrixRainingLetters />
          <div className={styles.content}>
            <h1 className={styles.heading}>focus. breathe. think. build. repeat.</h1>
            <h4 className={styles.subHeading}>Love Yourself!</h4>
            <button onClick={handleClose} className={styles.exitButton}>
              Exit Matrix Mode
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MatrixYoutubePlayer;
