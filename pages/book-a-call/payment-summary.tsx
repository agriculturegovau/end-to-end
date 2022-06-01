import AUbutton from 'components/@gov.au/AUbutton';
import { WizardLayout } from 'components/layouts/WizardLayout';
import Link from 'next/link';
import type { NextPage } from 'next';
import AUheading from 'components/@gov.au/AUheading';
import Hr from 'components/Hr';
import { ButtonGroup } from 'components/button-group';
import AUformGroup from 'components/@gov.au/AUformGroup';
import AUcheckbox from 'components/@gov.au/AUcheckbox';
import styled from '@emotion/styled';

const Invoice = styled.div`
  margin-top: 2em;

  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-areas:
    'invoice_heading invoice_billing_details'
    'invoice_items invoice_items'
    '. invoice_totals';

  row-gap: 2em;

  padding: 48px 24px;
  border: 1px solid #d3d3d3;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  border-radius: 8px;

  & p {
    margin: 0;
  }
`;

const InvoiceHeading = styled.div`
  grid-area: invoice_heading;
`;

const InvoiceBillingDetails = styled.div`
  grid-area: invoice_billing_details;
  text-align: right;
`;

const InvoiceItems = styled.div`
  grid-area: invoice_items;

  & table {
    width: 100%;
    border-spacing: 0;
  }

  & table thead th {
    border-bottom: 3px solid #bbb;
  }

  & table tbody td {
    border-bottom: 1px solid #bbb;
  }

  & table th,
  & table td {
    text-align: left;
    padding: 0.75em 0;
  }

  & table th:last-child,
  & table td:last-child {
    text-align: right;
    vertical-align: bottom;
  }
`;

const InvoiceTotals = styled.div`
  width: 100%;
  grid-area: invoice_totals;
  text-align: right;
  font-size: 1.2em;

  & table {
    width: 100%;
    border-spacing: 0;
  }

  & table td {
    padding: 0.35em 0;
  }
  & table td + td {
    padding-left: 1em;
  }

  & table tbody tr:last-child td {
    border-top: 1px solid #bbb;
    font-weight: bold;
  }
`;

const Page: NextPage = () => (
  <WizardLayout title="Pay your document processing" backbreadcrumb={false}>
    <p style={{ fontSize: '1.2em' }}>You need to pay for the processing of your documents, before you can export.</p>

    <Invoice>
      <InvoiceHeading>
        <AUheading level={2} size="xl">
          Invoice
        </AUheading>
        <p>Date: 14 December 2021</p>
        <p>Invoice number: #1025</p>
      </InvoiceHeading>
      <InvoiceBillingDetails>
        <p>
          <strong>Bill to:</strong>
        </p>
        <p>Jan Meyer</p>

        <p>ProduceCo</p>
        <p>123 Example St</p>
        <p>Sydney 2000</p>
      </InvoiceBillingDetails>
      <InvoiceItems>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p>Printing and dispatch of 5 certificates on security quality paper.</p>
                <br />
                <p>Application submission date: Sunday 12 December 2021</p>
                <p>Reference 76TH88IH</p>
              </td>
              <td>$3,330.00</td>
            </tr>
          </tbody>
        </table>
      </InvoiceItems>
      <InvoiceTotals>
        <table>
          <tbody>
            <tr>
              <td>Sub total:</td>
              <td>$3,330.00</td>
            </tr>
            <tr>
              <td>Tax:</td>
              <td>$370.00</td>
            </tr>
            <tr>
              <td>Total amount due:</td>
              <td>$3,700.00</td>
            </tr>
          </tbody>
        </table>
      </InvoiceTotals>
    </Invoice>

    <AUheading level={2} size="lg">
      Select how to pay
    </AUheading>
    <AUformGroup style={{ marginTop: '1em' }}>
      <AUcheckbox type="radio" name="payment-method" id="a" label="Pay with a debit or credit card" block />
      <AUcheckbox type="radio" name="payment-method" id="b" label="Pay by direct deposit" block />
      <AUcheckbox type="radio" name="payment-method" id="c" label="Add to monthly account" block />
      <AUcheckbox type="radio" name="payment-method" id="d" label="Talk to finance support" block />
    </AUformGroup>

    <Hr />

    <div style={{ marginTop: '3em' }}>
      <ButtonGroup>
        <AUbutton link="/book-a-call/book-a-call">Continue</AUbutton>
        <AUbutton as="secondary">Cancel</AUbutton>
      </ButtonGroup>
    </div>
  </WizardLayout>
);

export default Page;
