import React from "react";
import "../custom.css";
import MainDetails from "./MainDetails";

export default function PageDetails() {
  return (
    <div className="tab-content " id="nav-tabContent">
      <div
        className="tab-pane fade"
        id="nav-activity"
        role="tabpanel"
        aria-labelledby="nav-activity-tab"
      >
        Activity
      </div>
      <div
        className="tab-pane fade"
        id="nav-inwork"
        role="tabpanel"
        aria-labelledby="nav-inwork-tab"
      >
        Inwork
      </div>
      <div
        className="tab-pane fade"
        id="nav-details"
        role="tabpanel"
        aria-labelledby="nav-details-tab"
      >
        Details
      </div>
      <div
        className="tab-pane fade"
        id="nav-resources"
        role="tabpanel"
        aria-labelledby="nav-resources-tab"
      >
        Resources
      </div>
      <div
        className="tab-pane fade"
        id="nav-services"
        role="tabpanel"
        aria-labelledby="nav-services-tab"
      >
        Services
      </div>
      <div
        className="tab-pane fade show active"
        id="nav-location"
        role="tabpanel"
        aria-labelledby="nav-location-tab"
      >
        <div className="row p0 mt-4">
          <MainDetails />
        </div>
      </div>
      <div
        className="tab-pane fade"
        id="nav-assets"
        role="tabpanel"
        aria-labelledby="nav-assets-tab"
      >
        Assets
      </div>
    </div>
  );
}
