import React from 'react'
import "./blogPost.css";

export default function Blogpost() {
  const tags = ["Technology", "Social Being"]
  return (
    <div className="blogPostWrapper">
      <div className="blogPostContainer">
        <div className="blogPostLeft">
          <img src="/assets/proj_imgs/asl.png" alt="" />
        </div>
        <div className="blogPostRight">
          <span className="bpTitle">Blog Post Title</span><br></br>
          <span className="bpsDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </span><br></br>
          <span className="bpDate"> Published on : xx/xx/xxxx </span><br></br>
          <span className="bpTags"><span className="tagText">Tags: </span>
          {
            tags.map(tag => (
              <div className="tag">
                {tag}
              </div>
            ))
          }</span>
        </div>
      </div>
    </div>
  )
}
