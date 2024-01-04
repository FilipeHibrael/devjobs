import React from 'react';
import dataJson from '../../data.json';
import JobItem from './JobItem';
import styles from './Jobs.module.css';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';

const Jobs = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    request('../../src/data.json');
  }, [request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <div className={styles.jobs}>
        {dataJson.map((data) => (
          <JobItem key={data.id} {...data} />
        ))}
      </div>
    );
  else return null;
};

export default Jobs;
