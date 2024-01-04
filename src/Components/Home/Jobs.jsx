import React from 'react';
import dataJson from '../../data.json';
import JobItem from './JobItem';
import styles from './Jobs.module.css';

const Jobs = () => {
  console.log(dataJson);
  return (
    <div className={styles.jobs}>
      {dataJson.map((data) => (
        <JobItem key={data.id} {...data} />
      ))}
    </div>
  );
};

export default Jobs;
