import AUbutton from 'components/@gov.au/AUbutton';
import { WizardLayout } from 'components/layouts/WizardLayout';
import Link from 'next/link';
import type { NextPage } from 'next';
import AUheading from 'components/@gov.au/AUheading';
import { ButtonGroup } from 'components/button-group';
import styled from '@emotion/styled';
import { useState } from 'react';
import StaticImage from 'components/StaticImage';
import Hr from 'components/Hr';

const Upload = styled.section`
  background: #f5f5f5;
  border: 3px dashed #808080;
  border-radius: 8px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const Documents = styled.section`
  padding: 2rem 0;
`;
const Document = styled.div`
  margin-top: 1em;
  border-radius: 8px;
  background: #f5f5f5;
  display: flex;
  flex: row nowrap;
  align-items: center;
  justify-content: space-between;
  padding: 0 1em;
`;

const Home: NextPage = () => {
  const [documentsAdded, setDocuments] = useState(0);

  const documents = [...Array(documentsAdded)].map((_, n) => `Document ${n}.docx`);

  return (
    <WizardLayout title="Upload citrus sweetness certificate" navigator={false} backbreadcrumb={false}>
      <p style={{ fontSize: '1.2em' }}>
        Submit your third party certificate to continue exporting to Zuy by 7 January 2022 to maintain market access.
      </p>

      <AUheading size="lg" level={2}>
        Why we need this
      </AUheading>
      <p>
        Zuy recently changed their import requirements for citrus. You need to provide a copy of your citrus sweetness
        certificate provided as evidence of your compliance.
      </p>
      <p>
        For more information on the new legislation and how it affects Australian agricultural exporters, see{' '}
        <Link href="/todo">Zuy import legislation for Australian exporters.</Link>
      </p>

      <AUheading size="md" level={3} style={{ marginTop: '2em' }}>
        Upload files (required)
      </AUheading>
      <p style={{ marginTop: '.5rem', marginBottom: '.5rem' }}>
        Formats accepted: .png, .jpg, .pdf, .docx, .xls. Total file size must not exceed 100 MB.
      </p>

      <Upload>
        <div>
          <StaticImage src="/upload-icon.png" height={48} width={48} />
        </div>
        <div>Drag and drop files here or select files from your device.</div>
        <AUbutton
          as="secondary"
          onClick={(e) => {
            setDocuments(documents.length + 1);
          }}
        >
          Select files
        </AUbutton>
      </Upload>

      {documents.length > 0 ? (
        <Documents>
          {documents.map((document) => (
            <Document key={document}>
              <span>{document}</span>
              <AUbutton
                as="tertiary"
                onClick={(e) => {
                  setDocuments(documents.length - 1);
                }}
              >
                Remove file
              </AUbutton>
            </Document>
          ))}
        </Documents>
      ) : null}

      <Hr />

      <div style={{ marginTop: '3em' }}>
        <ButtonGroup>
          <Link passHref href="/changed-market-requirements/submitted">
            <AUbutton link>Submit document</AUbutton>
          </Link>
          <AUbutton as="secondary">Cancel</AUbutton>
        </ButtonGroup>
      </div>
    </WizardLayout>
  );
};

export default Home;
