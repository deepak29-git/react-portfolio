import blogImage from '../Images/blog-image.svg'
import '../component/Blog.css'
function Blogs(){
    return(
        <div>
            <div className="project-image">
            <img src={blogImage} alt="blog.svg" />
            </div>
            <h1>My <span style={{color:"#63B4FF"}}>Blogs</span></h1>
            <section className="grey-section">
                <h2>Health & Fitness</h2>
                <div className="small-section">
                <small>Get started with Health & Fitness</small>
                </div>
                <div className="blog-link">
                <a className="secondary-btn" href="https://my-blogs.hashnode.dev/what-are-health-and-fitness">Read Blog</a>
                </div>
            </section>
            <section className="white-section">
                <h2>What is Closure</h2>
                <div className="small-section">
                <small>Let's understand more about of Closure</small>
                </div>
                <div className="blog-link">
                <a className="secondary-btn" href="https://my-blogs.hashnode.dev/what-is-closures">Read Blog</a>
                </div>
            </section>
            <section className="grey-section">
                <h2>What is Npm</h2>
                <div className="small-section">
                <small>Let's understand more about of Npm</small>
                </div>
                <div className="blog-link">
                <a className="secondary-btn" href="https://my-blogs.hashnode.dev/what-is-npm">Read Blog</a>
                </div>
            </section>
            <hr />
        </div>
    )
}

export default Blogs;