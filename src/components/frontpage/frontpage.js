import React from "react";
import './frontpage.css';
import Code from '../../images/developer.svg'
import { navigate } from "gatsby";

const FrontPage = (props) => {
    return (
      <header>
          <div className = "header_section">
              <div className = "header_hero" >
                  <div className = "header_content"> 
                    <div className = "header_info">
                        <h1 className = "header_title">Hey Everyone, I am <span className = "header_subtext">Sudeep</span></h1>
                        <p className = "header_subtitle">Working on a sucessful project is always a challenging task. 
                        But working with all the highly productive development tools is what makes taking the challenge head on worth it!!</p>
                        <button onClick = {() => {}} className = "btn_med">More About Me</button>
                    </div>
                    <div className = "header_picture">
                        <img src = {Code} height = "350" width = "350" className = "profile_picture"></img>
                    </div>
                  </div>
              </div>
          </div>
      </header>
    );
}

export default FrontPage;