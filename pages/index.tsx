import Head from 'next/head';
import { keyframes } from '@emotion/core';
import styled from '@emotion/styled';

const wave = keyframes`
  0% { transform: rotate(  0.0deg) }
  10% { transform: rotate(-10.0deg) }
  20% { transform: rotate( 12.0deg) }
  30% { transform: rotate(-10.0deg) }
  40% { transform: rotate(  9.0deg) }
  50% { transform: rotate(  0.0deg) }
  100% { transform: rotate(  0.0deg) }
`;

const suspense = keyframes`
  0% {
    transform: translateY(50px);
    opacity: 0.2
  }
  50% {
    transform: translateY(0);
    opacity: 0.6
  }
  100%{
    transform: translateY(0);
    opacity: 1
  }
`;

const Main = styled.main`
  background: black;
  color: white;
  box-sizing: broder-box;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Headline = styled.h1`
  display: inline-block;
  color: white;
  font-family: sans-serif;
  font-size: 40px;
  transform-origin: center;
  animation: ${suspense} 1s ease-in-out 1;
`;

const Hand = styled.span`
  display: inline-block;
  transform-origin: 70% 70%;
  animation: ${wave} 2.5s ease-in 2s infinite;
`;

export default function Home(): JSX.Element {
  return (
    <div className="container">
      <Head>
        <title>Sumit Sati</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Main>
          <Headline>
            Hey There <Hand>&#128075;</Hand>
          </Headline>
          <div></div>
        </Main>
      </main>

      {/* <footer>
      </footer> */}
    </div>
  );
}
