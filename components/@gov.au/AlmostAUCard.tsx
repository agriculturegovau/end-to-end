import * as React from 'react';
import clsx from 'clsx';
import AUHeading from 'components/@gov.au/AUheading';

interface CardListProps {
  columns?: number;
}

interface CardProps {
  title: React.ReactNode;
  footer?: React.ReactNode;
  //shadow?: boolean;
  //centred?: boolean;
}

export const AlmostAUCardList: React.FC<CardListProps & React.ComponentProps<'ul'>> = ({
  columns,
  children,
  style,
  ...props
}) => (
  <ul
    style={{
      listStyle: 'none',
      padding: 0,
      ...(columns !== undefined
        ? { columns }
        : {
            columns: React.Children.count(children),
          }),
      ...style,
    }}
    {...props}
  >
    {React.Children.map(children, (child) => (
      <li style={{ margin: '0' }}>{child}</li>
    ))}
  </ul>
);

const AlmostAUCard: React.FC<CardProps & React.ComponentProps<'div'>> = ({ title, footer, style, children }) => (
  <div
    className="au-card au-body"
    style={{
      display: 'block',
      width: '100%',
      borderRadius: '4px',
      border: '1px solid #d3d3d3',
      position: 'relative',
      background: '#fff',
      overflow: 'hidden',
      boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
      ...style,
    }}
  >
    <div className="au-card__inner">
      <AUHeading level={3} size="lg" style={{ margin: '0 0 1rem 0' }}>
        {title}
      </AUHeading>
      {children}
    </div>
    {footer ? <div className="au-card__footer">{footer}</div> : null}
  </div>
);

AlmostAUCard.displayName = 'AUcard';

export default AlmostAUCard;
