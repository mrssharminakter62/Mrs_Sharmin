import React from 'react';
import { ProgressBar } from 'react-bootstrap';


const Skill = () => {
    return (
        <div className="container mt-5">
            <h2 className="text-center fw-bold mb-5 text-uppercase">MY SKILLS</h2>
            <div>
                <p className="fw-bold text-success">JavaScript:</p>
                <ProgressBar className="mb-2" animated variant="success" now={80}/>
                <p className="fw-bold text-primary">React.JS:</p>
                <ProgressBar className="mb-2" animated variant="primary" now={90} />
                <p className="fw-bold text-warning">Node.Js:</p>
                <ProgressBar className="mb-2" animated variant="warning" now={70} />
                <p className="fw-bold text-info">Express.Js:</p>
                <ProgressBar className="mb-2" animated variant="info" now={70} />
                <p className="fw-bold text-dark">MongoDb:</p>
                <ProgressBar className="mb-2" animated variant="dark" now={70} />
                <p className="fw-bold text-success">Bootstrap:</p>
                <ProgressBar className="mb-2" animated variant="success" now={95} />
                <p className="fw-bold text-danger">Css3:</p>
                <ProgressBar className="mb-2" animated variant="danger" now={85} />
                <p className="fw-bold text-primary">HTML5:</p>
                <ProgressBar className="mb-2" animated variant="primary" now={95} />
            </div>
        </div>
    );
};

export default Skill;