import { SimpleCard } from 'src/components/atoms/SimpleCard';
import useSWR from 'swr';

type CampaignsResponse = {
  id: string;
  name: string;
  thumbnail: string;
};

export const CampaignList = () => {
  const { data: campaigns } = useSWR<CampaignsResponse[]>('/campaigns');

  if (campaigns === undefined) {
    return <p>Loading...</p>;
  }

  return campaigns.map((campaign) => (
    <SimpleCard key={campaign.id} imageUrl={campaign.thumbnail}>
      {campaign.name}
    </SimpleCard>
  ));
};
