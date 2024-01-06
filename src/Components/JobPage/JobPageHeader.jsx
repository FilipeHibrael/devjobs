import React from 'react';
import styles from './JobPageHeader.module.css';

const JobPageHeader = ({ company, logo, logoBackground, website }) => {
  return (
    <div className='jobPageContainer'>
      <div className={styles.jobPageHeader}>
        <div className={styles.logo} style={{ background: logoBackground }}>
          <img src={'../../src' + logo} alt="" />
        </div>
        <div className={styles.info}>
          <h2>{company}</h2>
          <span>{company.toLowerCase().replace(' ', '')}.com</span>
        </div>
        <a
          className={`${styles.link} lightButton`}
          href={website}
          target="_blank"
          rel="noreferrer"
        >
          Company Site
        </a>
      </div>
    </div>
  );
};

export default JobPageHeader;
