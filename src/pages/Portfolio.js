import "./Portfolio.css";
import Navbar from "./Navbar";
import calcuImage2 from "./img/calculator.png"
import jao3Image from "./img/my react project.png"
import jao4Image from "./img/Front-end.png"
import jao5Image from "./img/Final front-end.png"

const Portfolio = () => {
  return (
    <>
      <Navbar />
      <div id="portfolio-info" className="bg-info">
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col">
              <h1 className="fw-bold display-1 text-center mt-5 pt-5">
                Portfolio 
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div id="portfolio">
        <div className="container">
          <div className="row text-light mt-5">
           <center><h3>PROJECTS</h3></center>
            <hr />
          <div className="col">
          <img className="one" src={calcuImage2} />
          <center><h4 className="mt-5">Calculator</h4></center>
          </div>
          <div className="col">
          <img className="two" src={jao3Image} />
          <center><h4 className="mt-5">My React</h4></center>
          </div>
          <div className="col">
          <img className="three" src={jao4Image} />
          <center><h4 className="mt-5">Final Frontend</h4></center>
          </div>
          <div className="col">
          <img className="four" src={jao5Image}/>
          <center><h4 className="mt-5">Frontend</h4></center>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
