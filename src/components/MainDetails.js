import React from "react";
import axios from "axios";
import "../custom.css";
import LocationCard from "./LocationCard";
import ContactDetails from "./ContactDetails";
import Map from "./Map";
import CustomerDetails from "./CustomerDetails";

const MainDetails = () => {
  //TODO:
  // 1) change background color to change for every second card
  // 2) API call
  // 3) map over cards
  // 4) markers on map

  const config1 = {
    method: "put",
    url:
      "https://k0kgl3su40.execute-api.us-east-2.amazonaws.com/dev/netwila/user/login",
    headers: {
      "Content-Type": "application/json",
      "api-key": "xhRMUd5Rjy6Z46MMpeAtj53SLH57ZgJa48RWwODa",
      "Access-Control-Allow-Origin": "*",
    },
  };

  async function requestLocations() {
    await axios(config1).then((resp) => {
      let auth = resp.data;
      console.log(auth);
    });
  }
  requestLocations();

  return (
    <>
      <div className="col-3 border-right">
        <h5 className="m-title pb-2 border-bottom">Locations</h5>
        <LocationCard />
        <LocationCard />
        <LocationCard />
        <LocationCard />
        <LocationCard />
        <LocationCard />
      </div>
      <div className="col-9">
        <div className="row p0">
          <div className="col-6 text-left">
            <h5 className="m-title">Location Detail</h5>
          </div>
          <div className="col-6 text-right">
            <a
              href="#"
              className="btn  btn-link active"
              role="button"
              aria-pressed="true"
            >
              Edit
            </a>
            <a
              href="#"
              className="btn btn-primary btn-link active"
              role="button"
              aria-pressed="true"
            >
              Add New Location
            </a>
          </div>
        </div>
        <div className="row mt-4 p0">
          <div className="col-3 text-left">
            <h5 className="f-13-b">Code</h5>
            <small>AL DRZ</small>
          </div>
          <div className="col-3 text-left">
            <h5 className="f-13-b">Location Type</h5>
            <small>Port</small>
          </div>
          <div className="col-6 text-left">
            <h5 className="f-13-b">Location Name</h5>
            <small>Durres (Durazzo)</small>
          </div>
        </div>
        <div className="row mt-4 p0">
          <div className="col-3 text-left">
            <h5 className="f-13-b">Address 1</h5>
            <small>Address 1</small>
          </div>
          <div className="col-3 text-left">
            <h5 className="f-13-b">Address 2</h5>
            <small>Address 2</small>
          </div>
        </div>
        <div className="row mt-4 p0">
          <div className="col-3 text-left">
            <h5 className="f-13-b">City</h5>
            <small>Durres (Durazzo)</small>
          </div>
          <div className="col-3 text-left">
            <h5 className="f-13-b">State</h5>
            <small>NA</small>
          </div>
          <div className="col-3 text-left">
            <h5 className="f-13-b">Postal Code</h5>
            <small>09989</small>
          </div>
          <div className="col-3 text-left">
            <h5 className="f-13-b">Country</h5>
            <small>Durres (Durazzo)</small>
          </div>
        </div>
        <hr />
        <ContactDetails />
        <hr />
        <Map />
        <hr />
        <CustomerDetails />
      </div>
    </>
  );
};

export default MainDetails;
