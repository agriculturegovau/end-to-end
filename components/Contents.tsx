import styled from '@emotion/styled';
import { ExecFileOptionsWithStringEncoding } from 'child_process';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

export const flows = {
  ['account-preferences']: [
    'sign-in',
    'welcome',
    'personalisation',
    'notification-preferences',
    'sharing-preferences',
    'success',
  ],
  ['book-a-call']: ['push-notification', 'email-inbox', 'sign-in', 'payment-summary', 'book-a-call', 'booked'],
  ['eligible-new-market']: [
    'push-notification',
    'email-inbox',
    'sign-in',
    'introduction',
    'apply',
    'servicensw-login',
    'servicensw-agree',
    'confirm',
    'success',
  ],
  ['service-finder']: ['categories', 'sign-in', 'where', 'suggested'],
  ['book-an-inspection']: ['sign-in', 'select-date', 'booked'],
  ['changed-market-requirements']: ['push-notification', 'email-inbox', 'sign-in', 'upload-document', 'submitted'],
  ['make-payment']: ['push-notification', 'email-inbox', 'sign-in', 'payment-summary', 'paypal', 'paypal-pay', 'paid'],
};

export const indexContents = new Map<keyof typeof flows, string>([
  ['service-finder', 'Service finder'],
  ['account-preferences', 'Account preferences'],
  ['book-a-call', 'Book a call with finance'],
  ['eligible-new-market', 'Eligible for new market'],
  ['book-an-inspection', 'Book an inspection'],
  ['changed-market-requirements', 'Changed market requirements'],
  ['make-payment', 'Make payment'],
]);

const Details = styled.details`
  & + & {
    margin-top: 2em;
  }

  & summary {
    cursor: pointer;
  }
`;

const Li = styled.li<{ active?: boolean }>`
  list-style: none;
  &::before {
    content: '${(props) => (props.active ? '👉' : '•')}';
    display: inline-block;
    width: 1.5em;
    margin-left: -1.5em;
  }
`;

// TODO : rename this
const References: React.FC<{
  root: keyof typeof flows;
  title?: string;
  pages?: string[];
}> = (props) => {
  const { root } = props;
  const { title = indexContents.get(root), pages = flows[root] } = props;

  const router = useRouter();
  const paths = [['index', `/${root}`], ...pages.map((page) => [page, `/${root}/${page}`])];

  return (
    <Details open>
      <summary>{title}</summary>
      <ul>
        {paths.map(([page, path]) => {
          return (
            <Li active={path === router.pathname} key={path}>
              <Link href={path}>{page}</Link>
            </Li>
          );
        })}
      </ul>
    </Details>
  );
};

const OverlayComponent = styled.div`
  background-color: var(--AU-color-background);
  background-color: #e8eaec;
  padding: 2em;
  position: fixed;
  overflow-y: scroll;
  overflow-x: hidden;
  top: 0;
  right: 0;
  bottom: 0;
  width: 20em;
  box-shadow: -4px 3px 10px #00000038;
  z-index: 3;
  border: 2px dashed #f31dc5;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
`;

export const OverlayCapture: React.FC = ({ children }) => {
  const [overlay, setOverlay] = useState(false);

  useEffect(() => {
    const el = window;

    const overlayListener = (e: KeyboardEvent) => {
      if (e.code !== 'Period') {
        return;
      }

      setOverlay(!overlay);
    };

    el.addEventListener('keydown', overlayListener);
    return () => {
      el.removeEventListener('keydown', overlayListener);
    };
  });

  return (
    <>
      {overlay ? (
        <OverlayComponent>
          <code style={{ display: 'block' }}>
            e2e tools
            <hr />
            <References root="service-finder" />
            <References root="account-preferences" />
            <References root="book-a-call" />
            <References root="eligible-new-market" />
            <References root="book-an-inspection" />
            <References root="changed-market-requirements" />
            <References root="make-payment" />
          </code>
          <span
            style={{
              cursor: 'pointer',
              fontSize: '4em',
              marginTop: 'auto',
              paddingTop: '1rem',
              alignSelf: 'flex-end',
            }}
            onClick={(e) => {
              setOverlay(false);
            }}
          >
            👋
          </span>
        </OverlayComponent>
      ) : null}
      {children}
    </>
  );
};