import React from "react";
import "../custom.css";
import profile from "../images/profile.png";

export default function Company() {
  return (
    <section className="d-block bg-white bg-lg mt_80 mlr-30">
      <div className="d-block bg-white p20">
        <div className="row">
          <div className="col-1">
            <img src={profile} alt="..." className="img-thumbnail" />
          </div>
          <div className="col-6">
            <h5 className="m-t-16">XYZ Company Name </h5>
            <div>
              <small>Registeration Number | Headquarters Address</small>
            </div>
            <div className="btn-group">
              <button
                type="button"
                className="btn p0 dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <small>View Location</small>
              </button>
              <div className="dropdown-menu dropdown-menu-right">
                <button className="dropdown-item" type="button">
                  Select
                </button>
                <button className="dropdown-item" type="button">
                  Select
                </button>
                <button className="dropdown-item" type="button">
                  Select
                </button>
              </div>
            </div>
          </div>
          <div className="col-3">
            <h6>Contact Information</h6>
            <div>
              <small>support@xyztechnologies.com</small>
            </div>
            <div>
              <small>(0) 99847 38879</small>
            </div>
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-primary btn-sm">
              <small>Share Company Profile</small>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
