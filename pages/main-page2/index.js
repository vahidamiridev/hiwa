import VideoFeature from '../../components/main-page/video-feature/VideoFeature'
import Services from '../../components/main-page/services/Services'
import CallToAction from '../../common/call-to-action/CallToAction'
import Portfolio from '../../components/main-page/portfolio/Portfolio'
import Testimonials from '../../components/main-page/testimonials/Testimonials'
import Counterup from '../../components/main-page/counterup/Counterup'
import OurTeam from '../../components/main-page/our-team/OurTeam'
import LatestBlog from '../../components/main-page/latest-blog/LatestBlog'
import ClientArea from '../../components/main-page/client-area/ClientArea'
import HeroSlider from '../../components/main-page2/hero-slider/HeroSlider'

const MainPage2 = () => {
  return (
    <>
      <HeroSlider />
      <VideoFeature />
      <Services />
      <CallToAction
        content={{
          title: 'محصولات و خلاقیت مارک مد ماست',
          discription: `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
        با استفاده از طراحان گرافیک است`,
          button: 'نمونه کارها',
        }}
      />
      <Portfolio />
      <Testimonials />
      <Counterup />
      <OurTeam />
      <LatestBlog />
      <ClientArea />
    </>
  )
}

export default MainPage2
