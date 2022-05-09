import { Link } from "react-router-dom";
import Logo from "../../styles/logo.png";
import { SOCIAL } from "../../data/Social.ts";

function Footer() {
  let newDate = new Date();
  let year = newDate.getFullYear();

  const social = SOCIAL;

  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <Link
            to="/"
            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          >
            <img
              src={Logo}
              alt="Logo de Zone2Rire"
              width="30"
              height="30"
              className="d-inline-block align-text-top"
            />
          </Link>
          <span className="text-muted">© 2022 - {year} Zone 2 Rire</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">

          {social.map((soc) => {
            return (
              <li className="ms-3">
                <a href={soc.link} className="text-muted" target="_blank" rel="noreferrer">
                  <i className={`${soc.logo} fa-lg`}></i>
                </a>
              </li>
            );
          })}

        </ul>
      </footer>
    </div>
  );
}

export default Footer;
