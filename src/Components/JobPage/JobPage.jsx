import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../Hooks/useFetch';
import Loading from '../Helper/Loading';
import Error from '../Helper/Error';

const JobPage = () => {
  const { id } = useParams();
  const { data, error, loading, request } = useFetch();
  const [jobData, setJobData] = React.useState(null);

  React.useEffect(() => {
    async function fetchJob() {
      const { json } = await request('../../src/data.json');
      setJobData(json.filter((item) => item.id === +id)[0]);
    }
    fetchJob();
  }, [request, id]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data) return <div>{jobData ? jobData.position : 'Not Found'}</div>;
};

export default JobPage;
