
import HeroSection from "./heroSection/body";

import Header from "./header/header";



const Homepage = () => {
    return ( 
        <div className="everything">
        <Header />
        <HeroSection />
       
      
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#212529" fill-opacity="1" d="M0,288L48,261.3C96,235,192,181,288,154.7C384,128,480,128,576,138.7C672,149,768,171,864,154.7C960,139,1056,85,1152,80C1248,75,1344,117,1392,138.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      
       
       
    </div>
        
     );
}
 
export default Homepage;