import React from 'react';
import { ProgressIndicatorIcon } from './progress-indicator';
import clsx from 'clsx';
import AUheading from 'components/@gov.au/AUheading';

export type StatusType = 'todo' | 'doing' | 'done';

const mapStatusToTitle = {
  todo: 'To do',
  doing: 'Doing',
  done: 'Done',
};

type ItemProps = {
  title: string;
  status: StatusType;
};

const Item = ({ title, status }: ItemProps) => {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
              .wizard-navigator__item {
                display: flex;
                border-top: 1px solid #636363;
                padding: 10px;
                vertical-align: middle;
                align-items: center;
                border-left: 4px solid transparent;
                color: #343434;
              }
              
              .wizard-navigator__item:last-of-type {
                border-bottom: 1px solid #636363;
              }
              
              .wizard-navigator__item.active {
                border-left-color: #00558B;
              }
              
              .wizard-navigator__item__status,
              .wizard-navigator__item__text {
              }
              
              .wizard-navigator__item__text {
                margin-left: 1em;
              }
              
              .wizard-navigator__item__text span {
                display: block;
              }
          `,
        }}
      />
      <div className={clsx('wizard-navigator__item', status === 'doing' && 'active')}>
        <div className={'wizard-navigator__item__status'}>
          <ProgressIndicatorIcon status={status} />
        </div>
        <div className={'wizard-navigator__item__text'}>
          <span style={{ fontSize: 14 }}>{mapStatusToTitle[status]}</span>
          <span
            style={{
              fontSize: 18,
              fontWeight: status === 'doing' ? 'bold' : 'inherit',
              cursor: 'pointer',
            }}
          >
            {title}
          </span>
        </div>
      </div>
    </>
  );
};

export const serviceFinderPages = [
  'Have you previously exported goods from Australia?',
  'What do you want to export?',
  'What is your role in the supply chain?',
  'Where do you want to export it?',
  'Suggested for you',
];

export const preferencesPages = [
  'Personalisation preferences',
  'Notification preferences',
  'Information sharing preferences',
];

export const registerEstablishmentPages = [
  'Establishment details',
  'Commodities',
  'Add persons',
  'Compliance',
  'Confirm',
];

export const Navigator: React.FC<React.ComponentProps<'div'> & { pages: string[]; progress: number }> = ({
  pages,
  progress,
  ...props
}) => {
  return (
    <>
      <AUheading level={3} size="md" style={{ marginBottom: '1em' }}>
        Your progress
      </AUheading>
      <div {...props} className="progress-navigator">
        {pages.map((page, n) => (
          <Item key={`page-${n}`} title={page} status={progress < n ? 'todo' : progress > n ? 'done' : 'doing'} />
        ))}
      </div>
    </>
  );
};
