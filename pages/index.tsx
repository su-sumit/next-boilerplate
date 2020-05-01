import Head from 'next/head'
import styled from '@emotion/styled'

const Banner = styled('div')`
  background: black;
  color: white;
`

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Sumit Sati</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Banner>
          Hey there
        </Banner>
      </main>

      <footer>
      </footer>

    </div>
  )
}
