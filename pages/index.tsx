import Head from 'next/head';
import styled from '@emotion/styled';

const Banner = styled('div')`
  background: black;
  color: white;
  box-sizing: broder-box;
`;

export default function Home(): JSX.Element {
  return (
    <div className="container">
      <Head>
        <title>Sumit Sati</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Banner>Hey there</Banner>
      </main>

      {/* <footer>
      </footer> */}
    </div>
  );
}
