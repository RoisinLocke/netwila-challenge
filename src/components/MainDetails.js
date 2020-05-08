import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../custom.css";
import LocationCard from "./LocationCard";
import ContactDetails from "./ContactDetails";
import Map from "./Map";
import CustomerDetails from "./CustomerDetails";

const MainDetails = (props) => {
  //TODO:
  // 4) map

  const urlParams = props.id;
  const [locations, updateLocations] = useState([]);
  const [mainLocation, updateMainLocation] = useState("");

  //get all locations
  useEffect(() => {
    const getLocations = async () => {
      const resp = await axios.get("http://localhost:8080/");
      updateLocations(resp.data);
    };
    getLocations();
  }, []);

  //get the specific location details for the main section
  useEffect(() => {
    if (urlParams !== "5e9deac67d3cb9a0a9d208ae") {
      const getMain = async () => {
        const resp = await axios.get(`http://localhost:8080/${urlParams}`);
        updateMainLocation(resp.data);
      };
      getMain();
    } else {
      const getMain = async () => {
        const resp = await axios.get(
          "http://localhost:8080/5e9deac67d3cb9a0a9d208ae"
        );
        updateMainLocation(resp.data);
      };
      getMain();
    }
  }, [urlParams]);

  //get all locations for left side (excluding the one being shown on the main section)
  const locationList = locations
    .filter((location) => {
      if (mainLocation._id !== location._id) {
        return location;
      }
    })
    .map((location) => (
      <Link to={"/" + location._id} key={location._id}>
        <LocationCard locationInfo={location} />
      </Link>
    ));

  const locationsPresent = locations.length > 0;
  const mainLocationPresent = mainLocation;

  return (
    <>
      {locationsPresent ? (
        <div className="row p0 mt-4">
          <div className="col-3 border-right">
            <h5 className="m-title pb-2 border-bottom">Locations</h5>
            {locationList}
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
                <small>{mainLocation.code}</small>
              </div>
              <div className="col-3 text-left">
                <h5 className="f-13-b">Location Type</h5>
                {/* <small>{mainLocation.type.pop()}</small> */}
              </div>
              <div className="col-6 text-left">
                <h5 className="f-13-b">Location Name</h5>
                <small>{mainLocation.name}</small>
              </div>
            </div>
            <div className="row mt-4 p0">
              <div className="col-3 text-left">
                <h5 className="f-13-b">Address 1</h5>
                <small>{mainLocation.address}</small>
              </div>
              <div className="col-3 text-left">
                <h5 className="f-13-b">Address 2</h5>
                <small>{mainLocation.address2}</small>
              </div>
            </div>
            <div className="row mt-4 p0">
              <div className="col-3 text-left">
                <h5 className="f-13-b">City</h5>
                <small>{mainLocation.city}</small>
              </div>
              <div className="col-3 text-left">
                <h5 className="f-13-b">State</h5>
                <small>{mainLocation.state}</small>
              </div>
              <div className="col-3 text-left">
                <h5 className="f-13-b">Postal Code</h5>
                <small>{mainLocation.postCode}</small>
              </div>
              <div className="col-3 text-left">
                <h5 className="f-13-b">Country</h5>
                <small>{mainLocation.country}</small>
              </div>
            </div>
            <hr />
            <ContactDetails />
            <hr />
            {mainLocationPresent ? (
              <Map
                lat={mainLocation.geolocation.lat}
                long={mainLocation.geolocation.long}
              />
            ) : (
              <p>Loading...</p>
            )}
            <hr />
            <CustomerDetails />
          </div>
        </div>
      ) : (
        <small>Loading...</small>
      )}
    </>
  );
};

export default MainDetails;
