import React from 'react';
import JobItem from './JobItem';
import styles from './Jobs.module.css';
import { Link } from 'react-router-dom';

const Jobs = ({ jobsData }) => {
  const [visibleItems, setVisibleItems] = React.useState(9);

  function handleLoadMore() {
    setVisibleItems((visibleItems) => visibleItems + 9);
  }

  return (
    <div className={styles.jobListContainer}>
      <div className={styles.jobs}>
        {jobsData.slice(0, visibleItems).map((jobsData) => (
          <Link
            key={jobsData.id}
            to={`/job/${jobsData.id}/${jobsData.position}`}
          >
            <JobItem {...jobsData} />
          </Link>
        ))}
      </div>
      {visibleItems < jobsData.length && (
        <button className={`${styles.button} button`} onClick={handleLoadMore}>
          Load More
        </button>
      )}
    </div>
  );
};

export default Jobs;
