import HomePageIndex from '../Components/Home/HomePageIndex'
import TopServices from '../Components/Home/TopServices'
import OurStory from "../Components/Home/OurStory"
import OurPlatform from "../Components/Home/OurPlatform"
import Testimonials from "../Components/Home/Testimonials"
import "./Home.css"
import Header from '../Layouts/Header/Header'
import Footer from '../Layouts/Footer/Footer'
import RegisterCompany from '../Components/Home/RegisterCompany'
import OurProcess from '../Components/Home/OurProcess'
import ContactLink from '../Components/Home/ContactLink'
import PostRegistration from '../Components/Home/PostRegistration'

export const HomePage = () => {
  return (
    <div>
      <Header />
      <HomePageIndex />
      <RegisterCompany />
      <OurProcess />
      <ContactLink />
      <PostRegistration />
      <TopServices />
      <OurStory />
      <OurPlatform />
      <Testimonials />
      {/* <OurClients /> */}
      <Footer />
    </div>
  )
}
