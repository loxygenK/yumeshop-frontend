import useSWR from 'swr';

export const CampaignList = () => {
  const { data } = useSWR('/campaigns');

  return <div>{JSON.stringify(data)}</div>;
};
