import React from 'react';
import styles from './Loading.module.css';

const Loading = () => {
  return (
    <div className={styles.spinner}>
      <h3>
        <span className={styles.visuallyHidden}>visuallyhidden</span>
      </h3>
    </div>
  );
};

export default Loading;
