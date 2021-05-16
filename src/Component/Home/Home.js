import React from 'react';
import './Home.css'
import image1 from "../../images/mim.jpg"
import facebook from "../../images/facebook.png"
import github from "../../images/github.png"
import linkedin from "../../images/linkedin.png"
import twitter from "../../images/twitter.png"

const Home = () => {
    return (
       <div className="container mt-5 mb-5">
          <div className="d-flex  align-items-center justify-content-center">
          <div>
                <img  style={{maxWidth:'70%', height:'auto', borderRadius:'10%'}} src={image1} alt="" />
           </div>
           <div>
                <h1 className="mb-3 text-primary text-center mb-5 ">ABOUT ME</h1>
                <h2 className="mt-3">Hello I'am <span> Mrs Sharmin Akter</span></h2>
                <h5 className="mt-3 mb-5 text-muted">I am a passionate web developer with one year experience.I have huse experience in web site building and customization. For every single project that I have done my focus has been on creating the best user experince possible.</h5>
                <div className="container px-4">
                <div className="row gx-5">
                    <div className="col">
                    <div className="gutter p-3 border fw-bold mb-2 text-center rounded-pill border-dark"><a href="https://drive.google.com/file/d/1E779251z_rCICPYI84Vj-RVtf-i04Hyn/view?usp=sharing">RESUME</a></div>
                    </div>
                    <div className="col">
                    <div className="gutter p-3 border fw-bold text-center rounded-pill border-dark"><a href="https://">HIRE ME</a> </div>
                    </div>
                </div>
                </div>
           </div>
          </div>
           <div className="text-center mt-5 m-5">
               <a href="https://www.facebook.com/" target="_blank"><img style={{maxWidth:'40px'}} src={facebook} alt="" /> </a>
               <a href="https://github.com/mrssharminakter62" target="_blank"><img style={{maxWidth:'40px'}} src={github} alt="" /> </a>
               <a href=""><img style={{maxWidth:'40px'}} src={linkedin} alt="" /> </a>
               <a href="https://twitter.com/MrsSharminAkte2"><img style={{maxWidth:'40px'}} src={twitter} alt="" /> </a>
           </div>
       </div>
    );
};

export default Home;