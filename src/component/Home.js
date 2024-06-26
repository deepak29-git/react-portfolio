import mainImage from '../Images/header_image.svg';
import blogIcon from '../Images/blog-icon.png';
import technologyIcon from '../Images/technology.png';
import projectIcon from '../Images/project-icon.png';
import '../component/Home.css';
import { useNavigate } from 'react-router';

function Home() {
  let navigate = useNavigate();

  return (
    <div>
      <img src={mainImage} alt="home.svg" />
      <div className="intro-container">
        <h1>
          Deepak Goyal the <span className="page-title">web developer</span>
        </h1>
        <p className="project-details plr-1">
          I am Front end developer. I have build five front end projects with
          mock backend at Neog Camp (Coding Bootcamp).In three
          projects-ecommerce app,video library and browser extension used my own
          css component library and in social media I used chakra ui for css and
          redux toolkit for state management.I have used all the best practices
          in my codebase and more focus on functionality, modular code,scalable
          and clean code.
        </p>
      </div>
      <div className="resume-btn">
        <a
          className="primary-btn none"
          target="_blank"
          rel="noopener noreferrer"
          href="https://drive.google.com/file/d/1OkTu1WJ7k-py7wlPscYTRIgHW_-AAN7u/view"
        >
          Download Resume
        </a>
      </div>
      <hr style={{ marginTop: '3rem' }} />
      <section className="grey-section">
        <img className="icon" src={technologyIcon} alt="technology.png" />
        <h2 className="title">Technologies</h2>
        <p className="project-details">
          I'm familiar with HTML5, CSS, JavaScript, ReactJS, Redux
          Toolkit,Chakra ui, GitHub and Web Hosting
        </p>
      </section>
      <hr />
      <section className="white-section">
        <img className="icon" src={projectIcon} alt="project.png" />
        <h2 className="title">Projects</h2>
        <p className="project-details">
          I like to showcase my work and thus, you can see my projects hosted
          online
        </p>
        <button onClick={() => navigate('/Projects')} className="primary-btn">
          See Projects
        </button>
      </section>
      <hr />
      <section className="grey-section">
        <img className="icon" src={blogIcon} alt="blog.png" />
        <h2 className="title">Blogs</h2>
        <p className="project-details">
          I am also working on some technical and non techincal blogs. I like to
          document my journey of learning.
        </p>
        <button onClick={() => navigate('/blogs')} className="primary-btn none">
          Read Blogs
        </button>
      </section>

      <hr />
    </div>
  );
}
export default Home;
