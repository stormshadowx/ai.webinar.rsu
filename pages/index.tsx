import Head from 'next/head'
import dynamic from "next/dynamic"
import SpeakerSection from '@/components/SpeekerSection'
import Footer from '@/components/Footer'
import BodySection from '@/components/BodySection'
import VisitUsSection from '@/components/VisitUsSection'
const Header = dynamic(() => import("@/components/Header"), { ssr: false })


const Home = () => {

  return (
    <>
      <Head>
        <title>AIvolution - Webinar | Ransit University</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/static/rangsit-logo.png" />
      </Head>
      <Header />
      <BodySection />
      <SpeakerSection />
      {/* <VisitUsSection /> */}
      <Footer />
    </>
  )
}

export default Home;