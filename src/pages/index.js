import React from 'react';

import { Flex, Heading, Link } from '@chakra-ui/core';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import { Grid } from '@chakra-ui/core';
import ResultCard from '../components/ResultCard';
import { Link as GatsbyLink } from 'gatsby';

export default () => {
  return (
    <Layout>
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <title>Home</title>
      </Helmet>
      <Link as={GatsbyLink} to="/about">
        About
      </Link>
      <Flex direction="column" align="center" justify="center">
        <Heading size="2xl" fontFamily="Arvo">
          Home
        </Heading>
      </Flex>
      <Grid
        templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
        gap={6}
        ml={10}
        mr={10}
      >
        <ResultCard
          businessCategory="entertainment"
          businessName="Dad's Donuts"
          businessDescription={`Urna ad aliquet taciti dapibus rutrum morbi iaculis ut, lacinia sit luctus leo posuere montes torquent, mi ligula lacus inceptos pharetra vitae augue.`}
          businessLocation="Atlanta, GA"
          businessUrl="https://renderatl.com"
          donationUrl="https://renderatl.com"
        />
        <ResultCard
          imageSrc="https://picsum.photos/900/900"
          businessCategory="foodAndBeverage"
          businessName="Baddy Books"
          businessDescription={`Urna ad aliquet taciti dapibus rutrum morbi iaculis ut, lacinia sit luctus leo posuere montes torquent, mi ligula lacus inceptos pharetra vitae augue.`}
          businessLocation="Atlanta, GA"
          businessUrl="https://renderatl.com"
        />
        <ResultCard
          businessCategory="Random Thing"
          businessName="Trisha's Tacos"
          businessDescription={`Neque justo aliquam diam ante, mattis malesuada donec nisi elit, tempor dui et.`}
          businessLocation="Atlanta, GA"
          businessUrl="https://renderatl.com"
        />
      </Grid>
    </Layout>
  );
};
