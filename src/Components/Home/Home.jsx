import React from 'react';
import Jobs from './Jobs';
import useFetch from '../../Hooks/useFetch';
import Loading from '../Helper/Loading';
import Error from '../Helper/Error';
import FilterBar from './FilterBar';

const Home = () => {
  const { data, error, loading, request } = useFetch();
  const [jobsData, setJobsData] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const { response, json } = await request('../../src/data.json');
      if (response && response.ok) setJobsData(json);
    }
    fetchData();
  }, [request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className="container">
        <FilterBar data={data} setJobsData={setJobsData} />
        <Jobs jobsData={jobsData} />
      </section>
    );
  else return null;
};

export default Home;
