import React from 'react';
import dataJson from '../../data.json';
import JobItem from './JobItem';
import styles from './Jobs.module.css';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import { Link } from 'react-router-dom';

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
          <Link key={data.id} to={`/job/${data.id}/${data.position}`}>
            <JobItem {...data} />
          </Link>
        ))}
      </div>
    );
  else return null;
};

export default Jobs;
