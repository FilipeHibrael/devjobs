import React from 'react';
import dataJson from '../../data.json';
import JobItem from './JobItem';
import styles from './Jobs.module.css';
import useFetch from '../../Hooks/useFetch';

const Jobs = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    request('../../src/data.json');
  }, [request]);

  if (error) return <div>{error}</div>;
  if (loading) return <div>Carregando...</div>;
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
