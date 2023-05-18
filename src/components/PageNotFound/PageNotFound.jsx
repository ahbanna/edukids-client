import React from "react";
import "./PageNotFound.css";
import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <div className="error-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img src="https://studio.uxpincdn.com/studio/wp-content/uploads/2021/06/10-error-404-page-examples-for-UX-design.png.webp" />
          </div>
          <div class="col-lg-6 error-text">
            <h3>Page Not Found</h3>
            <div class="back-to-home-btn">
              <button>
                <Link to="/">Go To Home Page</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
