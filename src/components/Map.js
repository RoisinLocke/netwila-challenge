import React from "react";
import "../custom.css";

export default function Map(props) {
  const lat = props.lat;
  const long = props.long;

  function ParseDMS(lat, long) {
    let part1 = lat.split(" ").join("");
    let part2 = long.split(" ").join("");

    let lt = ConvertDMMToDD(part1[0], part1[1], part1[3], part1[4], part1[6]);
    let lng = ConvertDMMToDD(part2[0], part2[1], part2[3], part2[3], part2[6]);
    return [lt, lng];
  }

  function ConvertDMMToDD(degrees, minutes, direction) {
    var dd = degrees + minutes / 60;

    if (direction === "S" || direction === "W") {
      dd = dd * -1;
    }
    return dd;
  }

  return (
    <div>
      <h5 className="m-title">Location</h5>
      <div className="row mt-4 p0">
        <div className="col-12 text-left">
          <iframe
            title="Google Maps"
            src={
              `https://www.google.com/maps/embed/v1/place?key=AIzaSyDTU592uqzjF86l48FBsjcyNr6ytJ3vfVA&q=` +
              ParseDMS(lat, long)
            }
            width="100%"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
