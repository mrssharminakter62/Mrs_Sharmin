import React from 'react';
import "./HeaderMain.css";
import Typed from 'react-typed';

const HeaderMain = () => {
    return (
        <div className="header_main mb-5">
            <div className="type_font">
            <h2>I'am </h2>
               <Typed
                className= "typed-text "
                    strings={['Mrs Sharmin Akter', 'A Front End Developer' , 'A React Developer']}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
            </div>
        </div>
    );
};

export default HeaderMain;