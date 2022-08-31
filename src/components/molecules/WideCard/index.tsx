import { TagProps } from 'src/components/atoms/Tag';
import { breakpoint } from 'src/styles/breakpoint';
import { fontSizes, roundings, shadows, spacingSizes } from 'src/styles/Tokens';
import styled, { css } from 'styled-components';
import { Tags } from 'src/components/molecules/Tags';
import dayjs from 'dayjs';
import 'dayjs/plugin/utc';
import 'dayjs/plugin/timezone';

const WideCardWrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: ${spacingSizes.xs};

  box-shadow: ${shadows.md};
  border-radius: ${roundings.sm};

  ${breakpoint.mb(css`
    padding: ${spacingSizes.xs};
  `)}
  ${breakpoint.tb(css`
    padding: ${spacingSizes.xs} ${spacingSizes.sm};
  `)}
  ${breakpoint.pc(css`
    padding: ${spacingSizes.sm};
  `)}
`;

const MetaInformationLine = styled.div`
  display: flex;
  align-items: center;

  ${breakpoint.mb(css`
    gap: ${spacingSizes.xs};
  `)}
  ${breakpoint.pc(css`
    gap: ${spacingSizes.sm};
  `)}
`;

const Date = styled.time`
  line-height: 1;
  font-weight: 700;

  ${breakpoint.mb(css`
    font-size: ${fontSizes.fontSize14};
  `)}
  ${breakpoint.pc(css`
    font-size: ${fontSizes.fontSize24};
  `)}
`;

const Content = styled.p`
  ${breakpoint.mb(css`
    font-size: ${fontSizes.fontSize12};
  `)}
  ${breakpoint.pc(css`
    font-size: ${fontSizes.fontSize18};
  `)}
`;

export type WideCardProps = {
  date: string;
  tags: TagProps[];
  text: string;
};
export const WideCard = ({
  date: rawDate,
  tags,
  text,
}: WideCardProps): JSX.Element => {
  const date = dayjs(rawDate).tz();

  return (
    <WideCardWrapper>
      <MetaInformationLine>
        <Date dateTime={date.format('YYYY-MM-DD')}>
          {date.format('YYYY/MM/DD')}
        </Date>
        <Tags tags={tags} />
      </MetaInformationLine>
      <Content>{text}</Content>
    </WideCardWrapper>
  );
};
