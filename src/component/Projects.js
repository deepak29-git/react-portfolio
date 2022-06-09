import projectImage from "../Images/project-image.svg";
import "../component/Project.css";

function Projects({bg}) {
  return (
    <div>
      <div className="project-image">
        <img src={projectImage} alt="projects.svg" />
      </div>
      <h1 >
        <span className={`${bg==="#475569"?'border-bottom-dark':'border-bottom'}`}>
        My <span className="page-title">Projects</span>
        </span>
      </h1>
      
      <section className="grey-section">
        <h2 className="title">Ecommerce Application</h2>
        <small>Feb,2022</small>
        <p className="project-details">
          React hooks, Frontend authentication, filtering products, cart and
          wishlist management.
        </p>
        <div class="container-fluid">
          <ul class="non-bullet">
            <li class="primary-btn">
              <a target="blank" href="https://shopio.vercel.app/">
                Live Projects
              </a>
            </li>
            <li class="secondary-btn">
              <a
                target="blank"
                href="https://github.com/deepak29-git/ecommerce-application"
              >
                View Source
              </a>
            </li>
          </ul>
        </div>
      </section>
      <hr />
      <section className="white-section">
        <h2 className="title">Video Library</h2>
        <small>Feb,2022</small>
        <p className="project-details">
          React hooks, Frontend authentication, playlist management, watch
          later, history and liked video
        </p>
        <div class="container-fluid">
          <ul class="non-bullet">
            <li class="primary-btn">
              <a target="blank" href="https://videopeek.vercel.app/">
                Live Projects
              </a>
            </li>
            <li class="secondary-btn">
              <a
                target="blank"
                href="https://github.com/deepak29-git/video-library"
              >
                View Source
              </a>
            </li>
          </ul>
        </div>
      </section>
      <hr />
      <section className="grey-section">
        <h2 className="title">Component Library</h2>
        <small>Jan,2022</small>
        <p className="project-details">
          Reusable components made by using HTML ,css and vanilla JavaScript. It
          is my own implementation of a component library like Bootstrap.
        </p>
        <div class="container-fluid">
          <ul class="non-bullet">
            <li class="primary-btn">
              <a target="blank" href="https://create-ui.netlify.app/">
                Live Projects
              </a>
            </li>
            <li class="secondary-btn">
              <a
                target="blank"
                href="https://github.com/deepak29-git/Create-ui"
              >
                View Source
              </a>
            </li>
          </ul>
        </div>
      </section>
      <hr />
      <section className="white-section">
        <h2 className="title">Social Media</h2>
        <small>May,2022</small>
        <p className="project-details">
          React hooks, Frontend authentication, filter- sort by date post
          ,trending post ,create newpost ,edit post ,delete post ,add comment
          ,edit comment ,delete comment on post, like post, bookmark post and
          much more. I have used redux toolkit for state management
        </p>
        <div class="container-fluid">
          <ul class="non-bullet">
            <li class="primary-btn">
              <a target="blank" href="https://talkmedia.vercel.app/signin">
                Live Projects
              </a>
            </li>
            <li class="secondary-btn">
              <a
                target="blank"
                href="https://github.com/deepak29-git/social-media"
              >
                View Source
              </a>
            </li>
          </ul>
        </div>
      </section>
      <hr />
      <section className="grey-section">
        <h2 className="title">Browser Extension</h2>
        <small>Apr,2022</small>
        <p className="project-details">
          I have build browser extension by using react js which user can add
          main focus, see current time and weather in sync, todos, image
          changing on every refresh, countdown.
        </p>
        <div class="container-fluid">
          <ul class="non-bullet">
            <li class="primary-btn">
              <a target="blank" href="https://tabtools.netlify.app/">
                Live Projects
              </a>
            </li>
            <li class="secondary-btn">
              <a
                target="blank"
                href="https://github.com/deepak29-git/browser-new-tab-extension"
              >
                View Source
              </a>
            </li>
          </ul>
        </div>
      </section>
      <hr />
      <section className="white-section">
        <h2 className="title">Movie Trailer App</h2>
        <small>Dec,2021</small>
        <p className="project-details">
          A web app using React which fetch the data from api and show the movie
          trailer.
        </p>
        <div class="container-fluid">
          <ul class="non-bullet">
            <li class="primary-btn">
              <a
                target="blank"
                href="https://react-movie-trailer-app.netlify.app/"
              >
                Live Projects
              </a>
            </li>
            <li class="secondary-btn">
              <a
                target="blank"
                href="https://github.com/deepak29-git/React-movie-trailer-app"
              >
                View Source
              </a>
            </li>
          </ul>
        </div>
      </section>
      <hr />
      <section className="grey-section">
        <h2 className="title">Movie Booking App</h2>
        <small>Dec,2021</small>
        <p className="project-details">
          A web app using React which fetch the data from api and show a
          description of particular movie
        </p>
        <div class="container-fluid">
          <ul class="non-bullet">
            <li class="primary-btn">
              <a target="blank" href="https://react-show-movie.netlify.app/">
                Live Projects
              </a>
            </li>
            <li class="secondary-btn">
              <a
                target="blank"
                href="https://github.com/deepak29-git/React-movie-project/tree/master"
              >
                View Source
              </a>
            </li>
          </ul>
        </div>
      </section>
      <hr />
      <section className="white-section">
        <h2 className="title">Stock Profit & Loss Calculator App</h2>
        <small>Dec,2021</small>
        <p className="project-details">
          A web app using Vanilla JavaScript which shows stock profit and loss
          and also show the percentage of profit and loss.
        </p>
        <div class="container-fluid">
          <ul class="non-bullet">
            <li class="primary-btn">
              <a
                target="blank"
                href="https://profit-loss-calculator-app.netlify.app/"
              >
                Live Projects
              </a>
            </li>
            <li class="secondary-btn">
              <a
                target="blank"
                href="https://github.com/deepak29-git/Profit-and-Loss-Calculator"
              >
                View Source
              </a>
            </li>
          </ul>
        </div>
      </section>
      <hr />
      <section className="grey-section">
        <h2 className="title">Palindrome Birthday App</h2>
        <small>Dec,2021</small>
        <p className="project-details">
          A web app using Vanilla JavaScript which check Palindrome birthday and
          that will also show the nearest palindrome date and how many days
          missed
        </p>
        <div class="container-fluid">
          <ul class="non-bullet">
            <li class="primary-btn">
              <a
                target="blank"
                href="https://palindrome-birthday-app.netlify.app/"
              >
                Live Projects
              </a>
            </li>
            <li class="secondary-btn">
              <a
                target="blank"
                href="https://github.com/deepak29-git/Palindrome-birthday"
              >
                View Source
              </a>
            </li>
          </ul>
        </div>
      </section>
      <hr />
      <section className="white-section">
        <h2 className="title">Fun With Triangle App</h2>
        <small>Dec,2021</small>
        <p className="project-details">
          A web app using Vanilla JavaScript which shows Angles of
          tirangles,Hypotaneuse,Area of Triangles and play with triangle quiz
        </p>
        <div class="container-fluid">
          <ul class="non-bullet">
            <li class="primary-btn">
              <a
                target="blank"
                href="https://fun-with-triangle-application.netlify.app/index.html"
              >
                Live Projects
              </a>
            </li>
            <li class="secondary-btn">
              <a
                target="blank"
                href="https://github.com/deepak29-git/Fun-with-Triangles"
              >
                View Source
              </a>
            </li>
          </ul>
        </div>
      </section>
      <hr />
      <section className="grey-section">
        <h2 className="title">Birthday Lucky App</h2>
        <small>Dec,2021</small>
        <p className="project-details">
          A web app using Vanilla JavaScript enter the birthdate and lucky
          number and show you are lucky or not ?
        </p>
        <div class="container-fluid">
          <ul class="non-bullet">
            <li class="primary-btn">
              <a target="blank" href="https://birthday-lucky-app.netlify.app/">
                Live Projects
              </a>
            </li>
            <li class="secondary-btn">
              <a
                target="blank"
                href="https://github.com/deepak29-git/Lucky-Birthday-app"
              >
                View Source
              </a>
            </li>
          </ul>
        </div>
      </section>
      <hr />
      <section className="white-section">
        <h2 className="title">Cash Register App</h2>
        <small>Dec,2021</small>
        <p className="project-details">
          A web app using Vanilla JavaScript enter the bill amount and cash
          given by the customer and know minimum number of notes to return.
        </p>
        <div class="container-fluid">
          <ul class="non-bullet">
            <li class="primary-btn">
              <a
                target="blank"
                href="https://cash-register-manager-application.netlify.app/"
              >
                Live Projects
              </a>
            </li>
            <li class="secondary-btn">
              <a
                target="blank"
                href="https://github.com/deepak29-git/cash-register-app"
              >
                View Source
              </a>
            </li>
          </ul>
        </div>
      </section>
      <hr />
      <section className="grey-section">
        <h2 className="title">Travel & Places Emoji Interpreter</h2>
        <small>Dec,2021</small>
        <p className="project-details">
          A web app using React that show travel & places emojis and give its
          description
        </p>
        <div class="container-fluid">
          <ul class="non-bullet">
            <li class="primary-btn">
              <a href="https://j3kbo.csb.app/">Live Projects</a>
            </li>
            <li class="secondary-btn">
              <a
                target="blank"
                href="https://github.com/deepak29-git/Travel-Places-Interpreter"
              >
                View Source
              </a>
            </li>
          </ul>
        </div>
      </section>
      <hr />
      <section className="white-section">
        <h2 className="title">Music Rating App</h2>
        <small>Dec,2021</small>
        <p className="project-details">A web app using React which show ratings of favorite music</p>
        <div class="container-fluid">
          <ul class="non-bullet">
            <li class="primary-btn">
              <a href="https://sccq7.csb.app/">Live Projects</a>
            </li>
            <li class="secondary-btn">
              <a href="https://github.com/deepak29-git/favorite-music-app">
                View Source
              </a>
            </li>
          </ul>
        </div>
      </section>
      <hr />
      <section className="grey-section">
        <h2 className="title">Ebonics Translator</h2>
        <small>Dec,2021</small>
        <p className="project-details">
          A web app built with Vanilla JavaScript which convert english to
          Ebonics language using api call.
        </p>
        <div class="container-fluid">
          <ul class="non-bullet">
            <li class="primary-btn">
              <a target="blank" href="https://ebonics-translator.netlify.app/">
                Live Projects
              </a>
            </li>
            <li class="secondary-btn">
              <a
                target="blank"
                href="https://github.com/deepak29-git/Ebonics-translator"
              >
                View Source
              </a>
            </li>
          </ul>
        </div>
      </section>
      <hr />
      <section className="white-section">
        <h2 className="title">Banana Talks</h2>
        <small>Dec,2021</small>
        <p className="project-details">
          A web app built with Vanilla JavaScript which convert english to
          minion language using api call.
        </p>
        <div class="container-fluid">
          <ul class="non-bullet">
            <li class="primary-btn">
              <a
                target="blank"
                href="https://banana-translattion-app.netlify.app/"
              >
                Live Projects
              </a>
            </li>
            <li class="secondary-btn">
              <a
                target="blank"
                href="https://github.com/deepak29-git/banana-translation-app"
              >
                View Source
              </a>
            </li>
          </ul>
        </div>
      </section>
      <hr />
      <section className="grey-section">
        <h2 className="title">The Great Ramayan Quiz</h2>
        <small>Dec,2021</small>
        <p className="project-details">
          A CLI app built with NodeJS. in which you can play quiz on Ramayan
        </p>
        <div class="container-fluid">
          <ul class="non-bullet">
            <li class="primary-btn">
              <a
                target="blank"
                href="https://replit.com/@dg8269/Ramayan-Quiz-1?embed=1&output=1"
              >
                Live Projects
              </a>
            </li>
            <li class="secondary-btn">
              <a
                target="blank"
                href="https://github.com/deepak29-git/Ramayan-Quiz-1"
              >
                View Source
              </a>
            </li>
          </ul>
        </div>
      </section>
      <hr />
      <section className="white-section">
        <h2 className="title">how well do you know me?</h2>
        <small>Dec,2021</small>
        <p className="project-details">
          A CLI app built with NodeJS. You can send this to your friends and
          find out who really knows you
        </p>
        <div className="container-fluid">
          <ul class="non-bullet">
            <li className="primary-btn">
              <a
                target="blank"
                href="https://replit.com/@dg8269/know-me?embed=1&output=1#index.js"
              >
                Live Projects
              </a>
            </li>
            <li className="secondary-btn">
              <a
                target="blank"
                href="https://github.com/deepak29-git/know-me/blob/master/index.js"
              >
                View Source
              </a>
            </li>
          </ul>
        </div>
      </section>
      <hr />
    </div>
  );
}
export default Projects;
