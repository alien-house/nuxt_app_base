import Layout from '../../components/Layout';
import styles from '../../styles/Home.module.scss'
import Head from 'next/head'

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="dekiru">
          <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main>
            あかんない
          </main>

        </div>
      </div>
    </Layout>
  )
}
