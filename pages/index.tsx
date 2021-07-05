import AboutObio from '../src/components/molecules/AboutObio'
import AboutMerchant from '../src/components/molecules/AboutMerchant'
import Hero from '../src/components/molecules/Hero'
import CarouselMerchant from '../src/components/molecules/CarouselMerchant'
import Newsletter from '../src/components/molecules/Newsletter'
import StoreTemplate from '../src/components/template/StoreTemplate'

export default function Home() {
  return (
    <StoreTemplate>
      <Hero />
      <AboutObio />
      <AboutMerchant />
      <CarouselMerchant />
      <Newsletter />
    </StoreTemplate>
  )
}
