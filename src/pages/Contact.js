import "./Contact.css";
import Navbar from "./Navbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faLocation, faNewspaper, faUserNinja } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <>
      <Navbar />

      <div id="Contact-info" className="bg-info">
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col">
              <h1 className="fw-bold display-1 text-center mt-5 pt-5">
                Contact
              </h1>
            </div>
          </div>
        </div>
      </div>

      <section id="faq">
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
              <a href="https://www.facebook.com/fordan.myra.3">
                <h1>
                  <FontAwesomeIcon className="icons" icon={faFacebook} />
                </h1>
              </a>
            </div>
            <div className="col-lg-2">
              <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Ftiktok.com%2F%40fordz_melon%3Ffbclid%3DIwZXh0bgNhZW0CMTAAAR03tXMnO0KnNCtfsEVOuEfZja3fEEtXwylf34B3OBMroc1wZz5PfLgof0Q_aem_PRgtV5GRxnLnIGUhOHQX_Q&h=AT0w5SSBKwZ47NbGydctq6ZjYlY2WsxSrBWnQz7_nX2JpyDvAf3k1nS14N2N40zJpC68NUe2J4HTHQiqOIX90KMUTEf8r-tafJcWTkdzeQWXdinwxNXraDnA-CtHEmbCXR0_">
                <h1>
                  <FontAwesomeIcon className="icons" icon={faTiktok} />
                </h1>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer class="footer text-light fixed-bottom pt-3" id="footer">
        <div class="container">
          <div class="row al">
            <div class="col-md-4 col-sm-6 text-lg-start text-center">
              <a class="navbar-brand" href="#">
              </a>
              <h5 class="mt-4"><FontAwesomeIcon className="me-1" icon={faUserNinja} />About Us</h5>
              <p>The world is difficult, and we are all breakable. so just be kind.</p>
            </div>
            <div class="col-md-4 col-sm-6 text-lg-start text-center">
              <h5><FontAwesomeIcon className="me-1" icon={faLocation} /> Address </h5>
              <p>Purok Basay, Barangay Bantayan,<br /> Kabankalan City Negros Occidental</p>
              <p>Email: fordanmariamel083121@gmail.com<br />Phone: 09382267928</p>
            </div>
            <div class="col-md-4 col-sm-6 text-lg-start  text-center">
              <h5><FontAwesomeIcon className="me-1" icon={faNewspaper} />Newsletter</h5>
              <form>
                <div class="input-group mb-3">
                  <input type="text" class="form-control" />
                  <button class="btn btn-outline-light" type="button" id="button-addon2">Subscribe</button>
                </div>
              </form>
              <p>This user is stressed out 24/7.</p>
            </div>
          </div>
        </div>
      </footer>

    </>
  );
};

export default Contact;