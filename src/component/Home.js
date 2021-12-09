import mainImage from '../Images/header_image.svg'
import blogIcon from '../Images/blog-icon.png'
import technologyIcon from '../Images/technology.png'
import projectIcon from '../Images/project-icon.png'
import '../component/Home.css'
import { useNavigate } from 'react-router'

function Home(){
    let navigate= useNavigate()

    return(
        <div>
            <img src={mainImage} alt="home.svg" />
            <h1>Deepak Goyal the <span style={{color:"#63B4FF"}}>web developer</span></h1>
            <div className="resume-btn">
            <a className="secondary-btn" href="https://drive.google.com/file/d/1yNj_jlF_o8UmFRBs2H5HvhZcWaMX665L/view?usp=sharing">Download Resume</a>
            </div>
            <section className="grey-section">
            <img className="icon" src={technologyIcon} alt="technology.png" />
            <h2 className="title">Technologies</h2>
            <p>I'm familiar with HTML5, CSS3, Git, JavaScript, NodeJS, ReactJS, and Web Hosting</p>
            </section>

            <section className="white-section">
                <img className="icon" src={projectIcon} alt="project.png" />
            <h2 className="title">Projects</h2>
            <p>I like to showcase my work and thus, you can see my projects hosted online</p>
            <button onClick={()=>navigate('/Projects')} className="primary-btn">See Projects</button>
            </section>

            <section className="grey-section">
                <img className="icon" src={blogIcon} alt="blog.png" />
            <h2 className="title">Blogs</h2>
            <p>I am also working on some technical and non techincal blogs. I like to document my journey of learning.</p>
            <button onClick={()=>navigate('/blogs')} className="secondary-btn">Read Blogs</button>
            </section>
            
            <hr/>
        </div>
    )
}
export default Home;