import '../component/Footer.css'
import instagramIcon from '../Images/instagram.png'
import githubIcon from '../Images/github-icon.png'
import linkedinIcon from '../Images/linkedin.png'
import twitterIcon from '../Images/twitter.png'

function Footer(){
    return(
        <div>
            <h3 class="contact-heading">Get in touch</h3>
            <div className="socialmedia-icon">
            <a href="https://github.com/deepak29-git"><img src={githubIcon} alt="Github" /></a>
            <a href="https://www.instagram.com/deepak_goyal_1996/"><img src={instagramIcon} alt="Instagram" /></a>
            <a href="https://www.linkedin.com/in/deepak-goyal-584157179/"><img src={linkedinIcon} alt="Linkedin" /></a>
            <a href="https://twitter.com/deepak887180"><img src={twitterIcon} alt="Twitter" /></a>
            </div>
        <footer className="footer">
           Developed by <span style={{color:"#63B4FF"}}>Deepak Goyal</span> Copyright © 2021 all rights reserved
        </footer>
       
        </div>
    )
}
export default Footer;