import './App.css'
import MainFileOfBestDoctors from './Best Doctors/mainFile'
import Footer from './Footer/footer'
import MainFileOfHeader from './Header/mainFile'
import MainFileOfLatestArticles from './Latest Articles/mainFile'
import MainFileOfPricingPlan from './Pricing Plan/mainFile'
import MainFileOfSpecialities from './Specialities/mainFile'
import MainFileOFTestimonialSlider from './Testimonial Slider.jsx/mainFile'
import MainFileOfLocation from './mainFileOfLocation'

function App() {

  return (
    <>
      <MainFileOfHeader />
      <MainFileOfLocation />
      <MainFileOfSpecialities />  
      <MainFileOfBestDoctors />
      <MainFileOfPricingPlan />
      <MainFileOfLatestArticles />
      <MainFileOFTestimonialSlider />
      <Footer />
      
    </>
  )
}

export default App

