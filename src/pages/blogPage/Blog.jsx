import './blog.css';
import BlogNav from '../../components/blogNavbar/BlogNav';
import Recblog from '../../components/recBlog/Recblog';
import Line from '../../components/line/Line';

export default function Blog() {
  return (
    <div className='blogWrapper'>
      <div className="blogContainer">
        <div className="blogNavbar">
        </div>
        <div className="blogBody">
          <div className="blogBodyIntro">
            <img  className="blogBodyImg"  src="/assets/a.jpeg" alt="" />
          </div>
          <Line className="line" color= "#5e6263"/>
          <div className="blogBodyPosts">
            <div className="recentBlogposts">
              Recent Posts
              <Recblog/>
            </div>
            <div className="allBlogposts">All Blog Posts</div>
          </div>
        </div>
      </div>
    </div>
  )
}