import AboutUs from "./aboutUs/aboutUs";
import HeroSection from "./heroSection/body";
import Courses from "./courses/courses";
import Header from "./header/header";
import Schools from "./schools/schools";
import ChooseUs from "./chooseUs/chooseUs";
import Features from "./Feature-section/Features";
import Newsletter from "./newsletter/newsletter";
import Footer from "./Footer/Footer";

const Homepage = () => {
    return ( 
        <>
        <Header />
        <HeroSection />
       
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f9f9f9" fill-opacity="1" d="M0,224L80,202.7C160,181,320,139,480,149.3C640,160,800,224,960,224C1120,224,1280,160,1360,128L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
        <Schools />
        <AboutUs/>
        <Courses />
        <ChooseUs />
        <Features/>
        <Newsletter/>
        <Footer/>
        </>
     );
}
 
export default Homepage;