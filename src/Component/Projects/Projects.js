import React from 'react';
import './Projects.css';
import { Card, CardGroup } from 'react-bootstrap';
import img1 from '../../images/portfoli5.png';
import img2 from '../../images/portfoli6.png';
import img3 from '../../images/portfoli3.PNG';
import img4 from '../../images/portfoli4.png';

const Projects = () => {
    return (
        <div className="container">
            <h2 className="text-center mt-3">MY PROJECTS</h2>
        <CardGroup className="m-3">
        <Card className="m-2 mb-5" style={{border:'none'}}>
          <Card.Img variant="top" className="img_box" src={img1} />
          <Card.Body>
            <Card.Title>Day Care Center</Card.Title>
            <Card.Text>
            This is Full-stack React app.Firstly you must be login. After You can choose any service. And buy any one. You can also  pay with master card. This project have dashboard for users and admin. Admin can add, delete or update services. And user can give review. My own API I used this project
            </Card.Text>
          </Card.Body>
          <Card.Footer style={{border:'none'}}>
            <div class="container px-4">
                <div class="row gx-5">
                    <div class="col">
                            <div class="p-3 border bg-dark text-center" style={{borderRadius:'15px'}}><a href=" https://day-care-94e39.web.app/" target="_blank">Live</a>
                        </div>
                    </div>
                        <div class="col">
                            <div class="p-3 border bg-dark text-center" style={{borderRadius:'15px'}}><a href="https://github.com/mrssharminakter62/Day-care" target="_blank">Github</a> 
                        </div>
                     </div>
                  </div>
                </div>
            </Card.Footer>
        </Card>
            <Card className="m-2 mb-5" style={{border:'none'}}>
          <Card.Img variant="top" className="img_box" src={img2} />
          <Card.Body>
            <Card.Title>Wings Rider</Card.Title>
            <Card.Text>
             This is another service. This projcet add login system, map etc. You can choose one service and give your location where you go. 
            </Card.Text>
          </Card.Body>
          <Card.Footer style={{border:'none'}}>
                <div class="container px-4">
                    <div class="row gx-5">
                        <div class="col">
                        <div class="p-3 border bg-dark text-center" style={{borderRadius:'15px'}}><a href="" target="_blank"> Live</a></div>
                        </div>
                        <div class="col">
                        <div class="p-3 border bg-dark text-center" style={{borderRadius:'15px'}}><a href="" target="_blank">Github</a> </div>
                        </div>
                    </div>
                </div>
          </Card.Footer>
        </Card>
        <Card className="m-2 mb-5" style={{border:'none'}}>
          <Card.Img variant="top" className="img_box" src={img4} />
          <Card.Body>
            <Card.Title>Ninja Sports</Card.Title>
            <Card.Text>
             You can see about any team details. This project I used third party API. I think this very usefull for you to know team information.
            </Card.Text>
          </Card.Body>
          <Card.Footer style={{border:'none'}}>
          <div class="container px-4">
                    <div class="row gx-5">
                        <div class="col">
                            <div class="p-3 border bg-dark text-center" style={{borderRadius:'15px'}}><a href="" target="_blank"> Live</a></div>
                            </div>
                            <div class="col">
                            <div class="p-3 border bg-dark text-center" style={{borderRadius:'15px'}}><a href="" target="_blank">Github</a> </div>
                            </div>
                        </div>
                    </div>
          </Card.Footer>
        </Card>
        <Card className="m-2 mb-5" style={{border:'none'}}>
          <Card.Img variant="top" className="img_box" src={img3}/>
          <Card.Body>
            <Card.Title>Panda Commerce</Card.Title>
            <Card.Text>
             This is very simple projcet. If you interested can visit.
            </Card.Text>
          </Card.Body>
          <Card.Footer style={{border:'none'}}>
          <div class="container px-4">
                    <div class="row gx-5">
                        <div class="col">
                            <div class="p-3 border bg-dark text-center" style={{borderRadius:'15px'}}> <a href="" target="_blank"> Live</a></div>
                            </div>
                            <div class="col">
                            <div class="p-3 border bg-dark text-center" style={{borderRadius:'15px'}}><a href="" target="_blank">Github</a> </div>
                            </div>
                        </div>
                    </div>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
    );
};

export default Projects;