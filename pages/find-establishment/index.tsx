import { LayoutPage } from 'components/LayoutPage';
import { Card, CardInner, CardLink } from '@ag.ds-next/card';
import { H1, H2, H3 } from '@ag.ds-next/heading';
import { FormStack } from '@ag.ds-next/form-stack';
import { Select } from '@ag.ds-next/select';
import { TextInput } from '@ag.ds-next/text-input';
import { Text, TextLink } from '@ag.ds-next/text';
import { Establishment, establishments } from 'components/exampleEstablishments';
import { ColumnContent } from 'components/ColumnContent';
import { IntroText } from 'components/IntroText';
import { Stack } from '@ag.ds-next/box';
import { useState } from 'react';

const unique = <T,>(items: T[]) => Array.from(new Set(items).values());

const actions = unique(establishments.flatMap((e) => e.operations.map((o) => o.action)));

interface Filters {
  service: string;
  postCode: string;
}

const serviceFilter = (service: string) => (e: Establishment) =>
  e.operations.find((o) => o.action.toLowerCase().includes(service)) !== undefined;

const postCodeFilter = (postCode: string) => (e: Establishment) => e.postCode.toLowerCase().includes(postCode);

const createFilters = (filters: Filters) => [serviceFilter(filters.service), postCodeFilter(filters.postCode)];

const filterEstablishments = (filters: Filters) =>
  establishments.filter((establishment) => createFilters(filters).every((filter) => filter(establishment)));

const Page: LayoutPage = () => {
  const [serviceValue, setServiceValue] = useState<string>('');
  const [postCodeValue, setPostCodeValue] = useState<string>('');

  const filteredEstablishments = filterEstablishments({
    service: serviceValue.toLowerCase(),
    postCode: postCodeValue.toLowerCase(),
  });

  return (
    <ColumnContent
      navigator={
        <>
          <H3>Filter establishments</H3>
          <Text as="p">
            <TextLink href="/todo">Clear all filters</TextLink>
          </Text>

          <form>
            <FormStack>
              {/*
            <SearchBox onSubmit={() => {}}>
              <SearchBoxInput label="Search countries" />
              <SearchBoxButton>Add</SearchBoxButton>
            </SearchBox>

              <TextInput
                label="What commodity do you wish to export?"
                hint="To ensure compliance with export requirements, we'll help you find a facility that's approved for your commodity."
              />
          */}
              <TextInput
                label="What service do you need?"
                hint="We'll only show facilities that are export approved to perform these operations."
                onChange={(e) => setServiceValue(e.target.value)}
              />
              <Select
                label="What service do you need?"
                hint="We'll only show facilities that are export approved to perform these operations."
                options={actions.map((action, n) => ({ label: action, value: `action-${n}` }))}
              />
              <TextInput
                label="Where would you like to find registered establishments?"
                onChange={(e) => setPostCodeValue(e.target.value)}
              />
            </FormStack>
          </form>
        </>
      }
    >
      <H1>Eligible registered establishments near you</H1>
      <IntroText>
        Based on what we know about your export business, here are some suitable registered establishments near you. You
        can change filters to find the establishment you need.
      </IntroText>
      <H3 as="h2">{filteredEstablishments.length} establishments match your criteria</H3>

      {filteredEstablishments.map((establishment, i) => (
        <Card key={i} clickable shadow>
          <CardInner>
            <H3>
              <CardLink href={`/find-establishment/establishment/${establishment.estNo}`}>
                {establishment.name}
              </CardLink>
            </H3>
            <Text as="p">
              {establishment.state} {establishment.postCode}
            </Text>
            <Stack flexDirection={'row'}>
              <Stack flexGrow={1}>
                <Text as="p" fontWeight={'bold'}>
                  Destination country
                </Text>
                <Text as="p">Unknown</Text>
              </Stack>

              <Stack flexGrow={1}>
                <Text as="p" fontWeight={'bold'}>
                  Services
                </Text>
                {unique(establishment.operations.map((operation) => operation.action)).map((action, n) => (
                  <Text as="p" key={n}>
                    {action}
                  </Text>
                ))}
              </Stack>
            </Stack>
          </CardInner>
        </Card>
      ))}
    </ColumnContent>
  );
};

export default Page;
