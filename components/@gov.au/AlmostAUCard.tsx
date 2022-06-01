import * as React from 'react';
import AUHeading from 'components/@gov.au/AUheading';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Card, CardInner, CardList } from '@ag.ds-next/card';
import { Stack } from '@ag.ds-next/box';
import { Heading } from '@ag.ds-next/heading';
import { Columns } from '@ag.ds-next/columns';

interface CardListProps {
  columns?: number;
}

interface CardComponentProps {
  shadow?: boolean;
  //centred?: boolean;
}

interface CardProps {
  heading: React.ReactNode;
  footer?: React.ReactNode;
}

export const AlmostAUCardListUL = styled.ul<Required<CardListProps>>`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: stretch;
  gap: 24px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  }
`;

const AlmostAUCardListLI = styled.li`
  & .au-card {
    height: 100%;
  }
`;

export const AlmostAUCardListOld: React.FC<CardListProps & React.ComponentProps<'ul'>> = ({
  columns,
  children,
  style,
  ...props
}) => (
  <AlmostAUCardListUL {...props} columns={columns === undefined ? React.Children.count(children) : columns}>
    {React.Children.map(children, (child) => (
      <AlmostAUCardListLI>{child}</AlmostAUCardListLI>
    ))}
  </AlmostAUCardListUL>
);

const AlmostAUCardBody = styled.div<CardComponentProps>`
  display: block;
  width: 100%;
  border-radius: 4px;
  position: relative;
  background: #fff;
  overflow: hidden;

  ${(props) =>
    props.shadow === true
      ? css`
          border: 1px solid #d3d3d3;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        `
      : props.shadow === false
      ? css`
          border: 0;

          & .au-card__inner {
            padding: 0;
          }
        `
      : css``};
`;

const AlmostAUCardOld: React.FC<CardProps & CardComponentProps & React.ComponentProps<'div'>> = ({
  shadow,
  heading,
  footer,
  style,
  children,
}) => (
  <AlmostAUCardBody className="au-card au-body" style={style} shadow={shadow}>
    <div className="au-card__inner">
      <AUHeading level={3} size="lg" style={{ margin: '0 0 1rem 0' }}>
        {heading}
      </AUHeading>
      {children}
    </div>
    {footer ? <div className="au-card__footer">{footer}</div> : null}
  </AlmostAUCardBody>
);

AlmostAUCardOld.displayName = 'AUcard';

export const AlmostAUCardList: React.FC<CardListProps> = ({ columns, children }) => {
  const columnCount = (columns === undefined ? React.Children.count(children) : columns) as React.ComponentProps<
    typeof CardList
  >['templateColumns'];

  return <CardList templateColumns={columnCount}>{children}</CardList>;
};

const AlmostAUCard: React.FC<CardProps & CardComponentProps & React.ComponentProps<'div'>> = ({
  shadow,
  heading,
  footer,
  style,
  children,
}) => (
  <Card shadow={shadow}>
    <CardInner>
      <Stack gap={1}>
        <Heading type="h3">{heading}</Heading>
        {children}
      </Stack>
    </CardInner>
  </Card>
);

export default AlmostAUCard;
