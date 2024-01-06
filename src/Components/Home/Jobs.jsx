import React from 'react';
import JobItem from './JobItem';
import styles from './Jobs.module.css';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import { Link } from 'react-router-dom';

const Jobs = () => {
  const { data, error, loading, request } = useFetch();
  const [visibleItems, setVisibleItems] = React.useState(9);

  React.useEffect(() => {
    request('../../src/data.json');
  }, [request]);

  function handleLoadMore() {
    setVisibleItems((visibleItems) => visibleItems + 9);
  }

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <div className={styles.jobListContainer}>
        <div className={styles.jobs}>
          {data.slice(0, visibleItems).map((data) => (
            <Link key={data.id} to={`/job/${data.id}/${data.position}`}>
              <JobItem {...data} />
            </Link>
          ))}
        </div>
        {visibleItems < data.length && (
          <button
            className={`${styles.button} button`}
            onClick={handleLoadMore}
          >
            Load More
          </button>
        )}
      </div>
    );
  else return null;
};

export default Jobs;
