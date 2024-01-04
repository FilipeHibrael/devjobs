import React from 'react';
import styles from './JobItem.module.css';

const JobItem = (props) => {
  return (
    <div className={styles.job}>
      <span className={styles.logo} style={{background: props.logoBackground}}>
        <img src={'../../src' + props.logo} alt={props.company} />
      </span>
      <div className={styles.info}>
        <span>{props.postedAt}</span>
        <span>{props.contract}</span>
      </div>
      <h2 className={styles.position}>{props.position}</h2>
      <span className={styles.company}>{props.company}</span>
      <span className={styles.location}>{props.location}</span>
    </div>
  );
};

export default JobItem;
