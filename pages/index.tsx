import React, { Suspense } from "react";
import Head from 'next/head';
import dynamic from "next/dynamic";
const DynamicMain = dynamic(() => import('../src/main'), {
  suspense: true,
  ssr: false
})

const IndexPage = ({}) => {
  return (
    <Suspense fallback={`Loading...`}>
      <Head>
        <title>Neo CMv3</title>
        <link rel="icon" type="image/x-icon" href="favicon.ico"/>
      </Head>
      <DynamicMain />
    </Suspense>
  );
};

export default IndexPage;
