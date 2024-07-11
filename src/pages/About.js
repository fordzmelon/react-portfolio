import "./About.css";
import Navbar from "./Navbar";
import myImage from "./img/gradpic1.jpeg"

const About = () => {
  return (
    <>
      <Navbar />
      <div id="about-info" className="bg-info">
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col">
              <h1 className="fw-bold display-1 text-center mt-5 pt-5">
                About
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div id="about">
        <div className="container">
          <div className="col">
            <div className="card shadow p-5 ">
              <div className="row">
              <div className="col-lg-4">
              <center><img src={myImage} /></center>
              </div>
              <div className="col-lg-8">
                <div className="card box shadow mb-3 p-3">
                <h4 className="text-dark"><span>About Me</span></h4>
              <p> My name is Maria Mel E. Fordan, 22 years old. I am currently pursuing a Batchelor of Science Information Technology (BSIT) at Central Philippines Sate University (CPSU).</p>
              <p>I am a K-pop fan of BTS and Black Pink. My bias in BTS is Kim Namjoon, and my bias in Black Pink is Rosé. I also watch K-dramas and movies.
 </p>
                </div>
                <div className="card box shadow p-3">
                <h4 className="text-dark"><span>Academic Achievements</span> </h4>
              <p> Primary: Barras Diutay Elementary School S.Y 2013<br /> Secondary: Junior Barras Diutay National High School S.Y 2017 <br />Senior High: Bantayan National High School S.Y 2020 <br />Tertiary: Central Philippines State University-Main Campus S.Y 2024</p>
              <p> </p>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
