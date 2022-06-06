import { TextLink } from '@ag.ds-next/text';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

export const flows = {
  ['discovery']: ['homepage', 'guide', 'understand', 'create-account'],
  ['register-establishment']: [
    'dashboard',
    'register-establishment',
    'establishment-details',
    'commodities',
    'add-persons',
    'compliance',
    'confirm',
    'establishment-added',
  ],
  ['account-preferences']: ['welcome', 'personalisation', 'notification-preferences', 'sharing-preferences', 'success'],
  ['book-a-call']: ['push-notification', 'email-inbox', 'sign-in', 'payment-summary', 'book-a-call', 'booked'],
  ['eligible-new-market']: [
    'push-notification',
    'email-inbox',
    'sign-in',
    'introduction',
    'apply',
    'confirm',
    'success',
  ],
  ['service-finder']: ['homepage', 'previous-exports', 'categories', 'role', 'where', 'results', 'create-account'],
  ['book-an-inspection']: ['select-date', 'booked'],
  ['changed-market-requirements']: ['push-notification', 'email-inbox', 'sign-in', 'upload-document', 'submitted'],
  ['make-payment']: ['push-notification', 'email-inbox', 'sign-in', 'payment-summary', 'paypal', 'paypal-pay', 'paid'],
  ['new-market-opportunity']: [
    'push-notification',
    'email-inbox',
    'sign-in',
    'introduction',
    'apply',
    'confirm',
    'success',
  ],
  ['interactive-guidance']: ['meat', 'animal-groups', 'product', 'role', 'result'],
};

export const tranche1Contents = new Map<keyof typeof flows, string>([
  //['register-establishment', 'Register establishment'], replace this
  ['discovery', 'Discovery'],
  ['service-finder', 'Service finder'],
  ['account-preferences', 'Account preferences'],
  ['book-an-inspection', 'Book an appointment'],
  ['book-a-call', 'Book a call'],
  ['changed-market-requirements', 'Changed market requirements'],
  ['eligible-new-market', 'New market eligibility'],
  //['make-payment', 'Make payment'],
  //['new-market-opportunity', 'New market eligibility'],
]);

export const tranche2Contents = new Map<keyof typeof flows, string>([['interactive-guidance', 'Interactive guidance']]);

const indexContents = new Map([...Array.from(tranche1Contents), ...Array.from(tranche2Contents)]);

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
              <TextLink href={path}>{page}</TextLink>
            </Li>
          );
        })}
      </ul>
    </Details>
  );
};

const PrototypeBadgeContainer = styled.div`
  --badge-size: 225px;

  position: absolute;
  overflow: hidden;
  width: var(--badge-size);
  height: var(--badge-size);
  display: block;
  top: 0;
  right: 0;
`;

const PrototypeBadge = styled.div`
  background-color: var(--agds-success);
  color: white;
  position: relative;
  width: var(--badge-size);
  height: var(--badge-size);
  box-shadow: -4px 3px 10px #00000038;
  z-index: 3;

  display: flex;
  justify-content: center;
  text-align: center;
  align-items: flex-end;
  transform: rotate(45deg) translate(0, calc(0px - var(--badge-size) * 0.706));
`;

const Proto = styled.div`
  padding: 2px 0.5rem;
  margin: 1em;
  border: solid 2px #fff;
  border-radius: 6px;
`;

const OverlayComponent = styled.div`
  background-color: var(--agds-background-body);
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
  z-index: 4;
  border: 2px dashed #f31dc5;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;

  & code {
    background-color: #f5f5f5;
    padding: 1rem;
    border-radius: 4px;
  }
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
            <References root="interactive-guidance" />
            <hr />
            <References root="discovery" />
            <References root="register-establishment" />
            <References root="service-finder" />
            <References root="account-preferences" />
            <References root="book-a-call" />
            <References root="eligible-new-market" />
            <References root="book-an-inspection" />
            <References root="changed-market-requirements" />
            <References root="make-payment" />
            <References root="new-market-opportunity" />
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
      <PrototypeBadgeContainer>
        <PrototypeBadge>
          <Proto>prototype</Proto>
        </PrototypeBadge>
      </PrototypeBadgeContainer>
      {children}
    </>
  );
};

export const useNextServicePage = () => {
  const router = useRouter();
  const [section, page] = router.pathname.substring(1).split('/');
  const currentPages = flows[section as keyof typeof flows];
  const currentPageOffset = currentPages?.indexOf(page);
  const nextPage = currentPages[currentPageOffset + 1];

  return nextPage ? `/${section}/${nextPage}` : '/404';
};

export const useServicePage = (page: string) => {
  const router = useRouter();
  const [section] = router.pathname.substring(1).split('/');

  return `/${section}/${page}`;
};
