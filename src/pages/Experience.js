import "./Experience.css";
import Navbar from "./Navbar";
import boy2Image from "./img/table tennis 2023.jpg"
import boy1Image from "./img/certificate of OJT.jpg"
import boy3Image from "./img/radio drama representatives 2023.jpg"
import jov2Image from "./img/thesis2.png"
import jov1Image from "./img/thesis1.png"
import jov3Image from "./img/thesis3.png"
import oms2Image from "./img/OJT2.jpg"
import oms1Image from "./img/OJT5.jpg"
import oms3Image from "./img/OJT4.jpg"

const Experience = () => {
  return (
    <>
      <Navbar />
      <div id="experience-info" className="bg-info">
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col">
              <h1 className="fw-bold display-1 text-center mt-5 pt-5">
                Experience
              </h1>
            </div>
          </div>
        </div>
      </div>

    <div className="exp">
    <div className="container">
          <hr/>
          <div className="row mb-5">
            <h3 className=" text-light text-center">ON-THE JOB TRAINING</h3>
            <hr />
          <div className="col-lg-4">
          <img className="two" src={oms2Image} />
         <h4>Encoding the books for accreditation</h4>
          </div>
          <div className="col-lg-4">
          <img className="one" src={oms1Image} />
          <center><h4>Cover the books</h4></center>
          </div>
          <div className="col-lg-4">
          <img className="three" src={oms3Image} />
          <h4>Put the call number and barcode of books</h4>
          </div>
          </div>
          <hr/>
          <div className="row mb-5">
            <h3 className=" text-light text-center">THESIS/CAPSTONE</h3>
            <hr />
          <div className="col-lg-4">
          <img className="two" src={jov1Image} />
          <h4>This is our Homepage of the System</h4>
          </div>
          <div className="col-lg-4">
          <img className="one" src={jov3Image} />
          <h4>Sign up or create account</h4>
          </div>
          <div className="col-lg-4">
          <img className="three" src={jov2Image} />
          <h4>This is our dashboard </h4>
          </div>
          </div>
          <hr/>
          <div className="row mb-5">
            <h3 className=" text-light text-center">ACHIEVEMENTS</h3>
            <hr />
          <div className="col-lg-4">
          <img className="two" src={boy2Image} />
          <h4>I am a representative of the third-year table tennis team during UWeek 2023</h4>
          </div>
          <div className="col-lg-4">
          <img className="one" src={boy1Image} />
          <h4>Certificate of Completion during Internship</h4>
          </div>
          <div className="col-lg-4">
          <img className="three" src={boy3Image} />
          <h4>I am a representative of the third-year radio drama in muscovado during Uweek 2023</h4>
          </div>
          </div>
      </div>
    </div>
    </>
  );
};

export default Experience;
