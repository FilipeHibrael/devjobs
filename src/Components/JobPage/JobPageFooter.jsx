import React from 'react';
import styles from './JobPageFooter.module.css';

const JobPageFooter = ({ company, position, apply }) => {
  return (
    <div className={styles.bg}>
      <div className={`${styles.jobPageFooter} jobPageContainer`}>
        <div>
          <h2>{position}</h2>
          <span>{company}</span>
        </div>
        <a className="button" href={apply} target="_blank" rel="noreferrer">
          Apply Now
        </a>
      </div>
    </div>
  );
};

export default JobPageFooter;
