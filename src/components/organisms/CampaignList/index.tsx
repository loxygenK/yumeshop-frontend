import { SimpleCard } from 'src/components/atoms/SimpleCard';
import { breakpoint } from 'src/styles/breakpoint';
import { spacingSizes } from 'src/styles/Tokens';
import styled, { css } from 'styled-components';
import useSWR from 'swr';

type CampaignsResponse = {
  id: string;
  name: string;
  thumbnail: string;
};

const CardList = styled.div`
  display: flex;

  ${breakpoint.pc(css`
    gap: ${spacingSizes.sm};
    flex-wrap: wrap;
  `)};
  ${breakpoint.mb(css`
    gap: ${spacingSizes.xs};
    flex-wrap: nowrap;
  `)};
`;

export const CampaignList = () => {
  const { data: campaigns } = useSWR<CampaignsResponse[]>('/campaigns');

  if (campaigns === undefined) {
    return <p>Loading...</p>;
  }

  return (
    <CardList>
      {campaigns.map((campaign) => (
        <SimpleCard key={campaign.id} imageUrl={campaign.thumbnail}>
          {campaign.name}
        </SimpleCard>
      ))}
    </CardList>
  );
};
