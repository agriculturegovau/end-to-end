import React from 'react';
import AUheading from 'components/@gov.au/AUheading';
import { ProgressIndicator } from '@ag.ds-next/progress-indicator';

export type StatusType = 'todo' | 'doing' | 'done';

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

export const Navigator: React.FC<{ pages: string[]; progress: number }> = ({ pages, progress }) => (
  <>
    <AUheading level={3} size="md" style={{ marginBottom: '1em' }}>
      Your progress
    </AUheading>
    <ProgressIndicator
      items={pages.map((page, n) => ({
        label: page,
        status: progress < n ? 'todo' : progress > n ? 'done' : 'doing',
      }))}
    />
  </>
);
