import React from "react";
import "../custom.css";

export default function Map(props) {
  const lat = props.lat;
  const long = props.long;

  function ParseDMS(lat, long) {
    let part1 = lat.split("");
    let part2 = long.split("");
    let lt = ConvertDMMToDD(part1[0], part1[1], part1[4], part1[5], part1[8]);
    let lng = ConvertDMMToDD(part2[1], part2[2], part2[6], part2[6], part2[9]);
    return [lt, lng];
  }

  function ConvertDMMToDD(degrees, minutes, direction) {
    var dd = degrees + minutes / 60;
    console.log(dd);

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
            src={
              `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d64451.24198133839!2d-126.23864096189445!3d59.44790826456593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b0d03d337cc6ad9%3A0x9968b72aa2438fa5!2sCanada!5e0!3m2!1sen!2sin!4v1587681941356!5m2!1sen!2sin/v1/place?key=AIzaSyC6w0kXPMKXoAWpPUSTUlip1O80ltRISW8&q=` +
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
