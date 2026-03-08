import "./Blog.css"
import RecentPropertyListed from "../recentpropertylisted/RecentPropertyListed";
export default function Blog () {
  return (
    <div className="Box" id="Blog">
      <div className="continer continerBlog">
        <div className="backgrounMainBlog">
          <div className="TextMain">
            <p>Blog</p>
            <h3>Blog Grid - Our Blogs</h3>
          </div>
        </div>
        <div className="BoxBlog">
          <RecentPropertyListed/>
        </div>
      </div>
    </div>
  );
}