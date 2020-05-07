import React from "react";
import "../custom.css";

export default function Nav() {
  return (
    <>
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <a
            className="nav-item nav-link"
            id="nav-home-tab"
            data-toggle="tab"
            href="#nav-activity"
            role="tab"
            aria-controls="nav-home"
            aria-selected="true"
          >
            Recent Activity
          </a>
          <a
            className="nav-item nav-link"
            id="nav-profile-tab"
            data-toggle="tab"
            href="#nav-inwork"
            role="tab"
            aria-controls="nav-profile"
            aria-selected="false"
          >
            Inwork
          </a>
          <a
            className="nav-item nav-link"
            id="nav-contact-tab"
            data-toggle="tab"
            href="#nav-details"
            role="tab"
            aria-controls="nav-contact"
            aria-selected="false"
          >
            Company Details
          </a>
          <a
            className="nav-item nav-link"
            id="nav-contact-tab"
            data-toggle="tab"
            href="#nav-resources"
            role="tab"
            aria-controls="nav-contact"
            aria-selected="false"
          >
            Resources & Documents
          </a>
          <a
            className="nav-item nav-link"
            id="nav-contact-tab"
            data-toggle="tab"
            href="#nav-services"
            role="tab"
            aria-controls="nav-contact"
            aria-selected="false"
          >
            Services
          </a>
          <a
            className="nav-item nav-link active"
            id="nav-contact-tab"
            data-toggle="tab"
            href="#nav-location"
            role="tab"
            aria-controls="nav-contact"
            aria-selected="false"
          >
            Location
          </a>
          <a
            className="nav-item nav-link"
            id="nav-contact-tab"
            data-toggle="tab"
            href="#nav-assets"
            role="tab"
            aria-controls="nav-contact"
            aria-selected="false"
          >
            Assets
          </a>
        </div>
      </nav>
    </>
  );
}
