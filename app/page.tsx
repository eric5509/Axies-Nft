import PopularCollections from '@/components/Home/PopularCollections'
import LiveAuctions from '@/components/Home/LiveAuctions'
import TodayPicks from '@/components/Home/TodayPicks'
import Hero from '@/components/Home/Hero'
import Footer from '@/components/Home/Footer'
import TopSellers from '@/components/Home/TopSellers'

export default function page() {
  return (
    <div>
      <Hero />
      <LiveAuctions />
      <PopularCollections />
      <TopSellers />
      <TodayPicks />
      <Footer /> 
      {/* 
      */}
    </div>
  );
}
