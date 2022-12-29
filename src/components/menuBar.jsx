import React from "react";
import { useNavigate } from "react-router-dom";

export default function MenuBar() {
  const navigateRegister = useNavigate();
  const navigateCounter = useNavigate();
  const navigateList = useNavigate();

  const navigateLogin = () => {
    navigateRegister("/login");
  };

  const navCounter = () => {
    navigateCounter("/dashboard/counter");
  };

  const navList = () => {
    navigateList("/dashboard/list");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid mx-auto">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item dropdown me-2">
                <a
                  className="nav-link dropdown-toggle selectLink"
                  href
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Company Info
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item selectLink FormContent" href>
                      {" "}
                      Company: M8 IT Solutions Pvt Ltd
                    </a>
                  </li>
                  <hr />
                  <li>
                    <a className="dropdown-item selectLink FormPlaceholder" href>
                      {" "}
                      Address:   3rd Floor, Vue Grande, <br /> 339, Chinnaswamy
                      Road, Siddhapudur, <br /> Balasundaram Layout, B.K.R
                      Nagar,
                      <br /> Coimbatore, Tamil Nadu 641044
                    </a>
                  </li>
                  <hr />
                  <li>
                    <a class="dropdown-item selectLink FormPlaceholder" href>
                      {" "}
                      Phone: 1231231233
                    </a>
                  </li>
                  <hr />
                  <li>
                    <a className="dropdown-item selectLink FormPlaceholder" href>
                      {" "}
                      Email: abc@gmail.com
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item selectLink me-2" onClick={navCounter}>
                <a className="nav-link" href>
                  {" "}
                  counter
                </a>
              </li>

              <li className="nav-item selectLink me-2" onClick={navList}>
                <a className=" nav-link" href>
                  {" "}
                  List
                </a>
              </li>

              <div className="me-2 mt-1">
                <button
                  className="btn btn-outline-success btn-sm"
                  onClick={navigateLogin}
                >
                  logout
                </button>
              </div>
              <br />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
