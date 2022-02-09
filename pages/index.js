import Head from 'next/head'
import '../components/Navbar'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>JustTips</title>
        <meta name="description" content="JustTips is a place where you can find many useful tips!" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Open+Sans:wght@300;400;500;700;800&display=swap" rel="stylesheet"></link>
      </Head>
      <Navbar />
    </div>
  )
}
