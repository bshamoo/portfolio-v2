import React from 'react'
import { Helmet } from 'react-helmet'


export const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} data-react-helmet="true" />
      <meta name='keyword' content={keywords} data-react-helmet="true"/>
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Brandon Shamoo',
  description: "Brandon Shamoo's Portfolio Website",
  keywords: 'Brandon Shamoo',
};