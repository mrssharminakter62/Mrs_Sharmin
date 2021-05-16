import React from 'react';
import "./Blog.css";
import im1 from "../../images/js.png";
import im2 from "../../images/react.jpg";
import im3 from "../../images/interview.jpg";
import im4 from "../../images/ES6.jpg";

const Blog = () => {
    return (
        <div className="container">
            <h2 className="text-center mt-3">MY BLOGS</h2>
            <div className="card-group mt-3">
            <div className="card m-3 mb-2" style={{width: '18rem'}}>
                <img src={im1} className="card-img-top image_box" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Ten important things in JS</h5>
                    <a href="https://zamalhossain-zh.medium.com/ten-important-things-in-javascript-which-is-need-for-all-a3e9d66ac8bc" target="_blank" className="btn btn-primary">Read More</a>
                </div>
            </div>
            <div className="card m-3 mb-2" style={{width: '18rem'}}>
                <img src={im2} className="card-img-top image_box" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">React.js for beginners</h5>
                    <a href="https://zamalhossain-zh.medium.com/react-js-for-beginners-8c4296dc93bd" target="_blank" className="btn btn-primary">Read More</a>
                </div>
            </div>
            <div className="card m-3 mb-2" style={{width: '18rem'}}>
                <img src={im4} className="card-img-top image_box" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Javascript ES6</h5>
                    <a href="https://zamalhossain-zh.medium.com/es6-javascript-a29e1d059d28" target="_blank" className="btn btn-primary">Read More</a>
                </div>
            </div>
            <div className="card m-3 mb-2" style={{width: '18rem'}}>
                <img src={im3} className="card-img-top image_box" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Javascript Interview Ques..</h5>
                    <a href="https://zamalhossain-zh.medium.com/ten-javascript-interview-question-which-is-very-importance-3abb0b6d512d" target="_blank" className="btn btn-primary">Read More</a>
                </div>
            </div> 
           </div>
        </div>
    );
};

export default Blog;  