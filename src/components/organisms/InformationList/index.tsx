import { TagProps } from 'src/components/atoms/Tag';
import { WideCard } from 'src/components/molecules/WideCard';
import { breakpoint } from 'src/styles/breakpoint';
import { spacingSizes } from 'src/styles/Tokens';
import styled, { css } from 'styled-components';
import useSWR from 'swr';

type TagResponse = {
  id: string;
  name: string;
  color: string;
  tag_group: string;
};

type InformationResponse = {
  id: string;
  title: string;
  detail: string;
  tags: TagResponse[];
  announced_at: string;
};

const generateTagProps = (tag: TagResponse): TagProps => ({
  name: tag.name,
  color: tag.color,
});

const CardList = styled.div`
  display: flex;
  flex-direction: column;

  ${breakpoint.mb(css`
    gap: ${spacingSizes.xs};
  `)};
  ${breakpoint.pc(css`
    gap: ${spacingSizes.sm};
  `)};
`;

export const InformationList = (): JSX.Element => {
  const { data: information } = useSWR<InformationResponse[]>('/informations');

  if (information === undefined) {
    return <p>Loading...</p>;
  }

  return (
    <CardList>
      {information.map((info) => (
        <WideCard
          key={info.id}
          date={info.announced_at}
          text={info.detail}
          tags={info.tags.map(generateTagProps)}
        />
      ))}
    </CardList>
  );
};
