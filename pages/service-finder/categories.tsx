import AUbutton from 'components/@gov.au/AUbutton';
import { WizardLayout } from 'components/layouts/WizardLayout';
import Link from 'next/link';
import type { NextPage } from 'next';
import AUformGroup from 'components/@gov.au/AUformGroup';
import AUcheckbox from 'components/@gov.au/AUcheckbox';
import { ButtonGroup } from 'components/button-group';
import Hr from 'components/Hr';
import { Navigator, serviceFinderPages } from 'components/wizard/navigator';
import styled from '@emotion/styled';
import TextInput from 'components/TextInput';
import { useRef, useState } from 'react';
import { css } from '@emotion/react';
import { TodoText } from 'components/Todo';

const labels = [
  'Animal by-products (such as wool, feathers or bones)',
  'Fodder, straw, timber products and/or nursery stock',
  'Fresh fruit and/or vegetables',
  'Grains, nuts and/or seeds',
  'Honey and/or apiary products',
  'Organic produce',
  'Processed foods',
  'Other - not listed above',
  'I’m not sure',
];

const Split = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 1em;

  & > * + * {
    margin-left: 1em;
  }
`;

const Tag = styled.span<{ secondary?: boolean }>`
  border: 1px solid var(--AU-color-foreground-action);
  ${(props) =>
    props.secondary === true
      ? css`
          border-color: transparent;
        `
      : css``};
  color: var(--AU-color-foreground-action);
  border-radius: 4px;
  padding: 0 8px;

  margin-right: 6px;
`;

const Tags = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const ExtraInformation = styled.div`
  border-left: 3px solid var(--AU-color-foreground-action);
  padding: 1em;
  margin: 1em;
`;

const ExpandedInfo = ({ label, n }: { label: string; n: number }) => {
  const tagsField = useRef<HTMLInputElement>(null);
  const [tags, setTags] = useState<string[]>([]);
  const addTag = (tag: string) => setTags([...tags, tag]);
  const delTag = (tag: string) => setTags(tags.filter((c) => c !== tag));

  return (
    <>
      <ExtraInformation>
        <TextInput
          id={`export_option_${n}_extra`}
          label="Search for specific fruits or vegetables (optional)"
          hint="Add one or more products"
          type="text"
          width="md"
          ref={tagsField}
        >
          <AUbutton
            as="secondary"
            style={{ marginLeft: '1em', marginTop: '.25rem' }}
            onClick={() => {
              if (tagsField === null) {
                return;
              }

              if (tagsField.current === null) {
                return;
              }

              const tag = tagsField.current.value;
              if (tag !== undefined && tag.length > 0) {
                tagsField.current.value = '';
                addTag(tag);
              }
            }}
          >
            Add product
          </AUbutton>
        </TextInput>

        <Tags style={{ marginTop: '1em' }}>
          {tags.map((tag, n) => (
            <Tag key={`tag-${n}`}>
              {tag}{' '}
              <span style={{ cursor: 'pointer' }} onClick={() => delTag(tag)}>
                ⨯
              </span>
            </Tag>
          ))}
        </Tags>
      </ExtraInformation>
    </>
  );
};

const ExportOption = ({ label, n }: { label: string; n: number }) => {
  const [ticked, setTicked] = useState(false);
  const expandable = label === 'Fresh fruit and/or vegetables';

  return (
    <>
      <AUcheckbox
        onChange={(e) => {
          setTicked(e.target.checked);
        }}
        checked={ticked}
        id={`export_option_${n}`}
        label={
          expandable ? (
            <span
              style={{
                fontWeight: 'bold',
                textDecoration: 'underline',
              }}
            >
              {label}
            </span>
          ) : (
            label
          )
        }
        block
      />
      {expandable ? ticked ? <ExpandedInfo label={label} n={n} /> : null : null}
    </>
  );
};

const Page: NextPage = () => (
  <WizardLayout
    title="What do you want to export?"
    navigator={<Navigator pages={serviceFinderPages} progress={1} />}
    frontmatter={
      <div style={{ marginTop: '2em' }}>
        <strong>Service finder</strong>
      </div>
    }
  >
    <p style={{ fontSize: '1.2em' }}>
      Export requirements differ, depending on the type of product you want to export from Australia.
    </p>
    <p>Select all that apply</p>

    <AUformGroup style={{ marginTop: '2em' }}>
      {labels.map((label, n) => (
        <ExportOption label={label} n={n} key={`option-${n}`} />
      ))}
    </AUformGroup>

    <Hr />

    <div style={{ marginTop: '3em' }}>
      <ButtonGroup>
        <AUbutton link="/service-finder/role">Continue</AUbutton>
        <AUbutton as="secondary">Cancel</AUbutton>
      </ButtonGroup>
    </div>
  </WizardLayout>
);

export default Page;
