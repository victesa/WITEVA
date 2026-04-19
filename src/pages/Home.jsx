import CTA from "../components/CTA"
import Footer from "../components/Footer"
import Foundation from "../components/Foundation"
import Hero from "../components/Hero"
import HowToHelp from "../components/HowToHelp"
import Mission from "../components/Mission"
import Navbar from "../components/Navbar"
import TeaDayPromo from "../components/TeaDayPromo"

export default function Home(){
    return(
    <div>
        {/* The Hero section will now render at the very top of your Home page */}
        <Hero />

        <TeaDayPromo/>

        <Foundation/>

        <Mission/>

        <HowToHelp/>

        <CTA/>

        <Footer/>
      
      {/* You can add more sections for the home page below this later */}
    </div>
    )
}