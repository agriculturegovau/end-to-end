import AUbutton from 'components/@gov.au/AUbutton';
import { WizardLayout } from 'components/layouts/WizardLayout';
import type { NextPage } from 'next';
import { ButtonGroup } from 'components/button-group';
import styled from '@emotion/styled';
import { useState } from 'react';
import StaticImage from 'components/StaticImage';
import Hr from 'components/Hr';
import { Text, TextLink } from '@ag.ds-next/text';
import { Body } from '@ag.ds-next/body';
import { Stack } from '@ag.ds-next/box';
import { IntroText } from 'components/IntroText';

const Upload = styled.section`
  padding: 4rem 0;
  background: #f5f5f5;
  border: 3px dashed #808080;
  border-radius: 8px;
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
    <WizardLayout title="Upload citrus sweetness certificate" backbreadcrumb={false}>
      <IntroText>
        Submit your third party certificate to continue exporting to Zuy by 7 January 2022 to maintain market access.
      </IntroText>
      <Body>
        <h2>Why we need this</h2>
        <p>
          Zuy recently changed their import requirements for citrus. You need to provide a copy of your citrus sweetness
          certificate provided as evidence of your compliance.
        </p>
        <p>
          For more information on the new legislation and how it affects Australian agricultural exporters, see{' '}
          <TextLink href="/todo">Zuy import legislation for Australian exporters.</TextLink>
        </p>

        <h3>Upload files (required)</h3>

        <p>Formats accepted: .png, .jpg, .pdf, .docx, .xls. Total file size must not exceed 100 MB.</p>
      </Body>

      <Upload>
        <Stack gap={1} justifyContent="center" alignItems="center">
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
        </Stack>
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
          <AUbutton link="/changed-market-requirements/submitted">Submit document</AUbutton>
          <AUbutton as="secondary">Cancel</AUbutton>
        </ButtonGroup>
      </div>
    </WizardLayout>
  );
};

export default Home;
