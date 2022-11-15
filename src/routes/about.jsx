import pictureOfMe from '../assets/img/portrait.jpg'
import {Link} from 'react-router-dom' 
import NavigationSystem from '../components/navigation'
import '../styles/sections.css'

export default function About(){
    const navLinks = ["About", "Projects", "Resume", "Contact", "Home"];

    return (
        <>
            <NavigationSystem linkNames={navLinks}/>
            <h1>About</h1>
            <div class="section-body">
                <img id="picture-of-me" src={pictureOfMe} alt="A picture of me"/>
                <div class="section-blurb">
                    <h2>
                        Who am I?
                    </h2>
                    <p>
                        My name is Kevin Nguyen. <br></br> <br></br>
                        I'm an Electrical Engineer, Software Developer, Consultant and Coding Educator all wrapped up into one package. <br></br> <br></br>
                        I've worked in many industries, from Masonry, Fintech, the Public Sector, to Utilities! <br></br> <br></br>
                        I have a love for playing guitar, cooking, backcountry camping and my friends and family.
                    </p>
                </div>
                <div class="section-blurb reversed" >
                    <h3>
                        See what I have to offer here:
                    </h3>
                    <div id="about-links">
                        <Link to="../resume">Experience</Link>
                        <Link to="../projects">Projects</Link>
                    </div>
                </div>
            </div>
        </>
    )
}