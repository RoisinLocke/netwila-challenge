import React from "react";
import "../custom.css";

export default function LocationCard(props) {
  const code = props.locationInfo.code;
  const type = props.locationInfo.type.type;

  return (
    <div>
      <div className="card mb-3" style={{ maxWidth: 540 + "px" }}>
        <div className="row no-gutters">
          <div className="col-md-12">
            <div className="bg-light  border-left pl10">
              <h5 className="card-title">{code}</h5>
              <div className="row mt-4 p0">
                <div className="col-6 text-left">
                  <h5 className="f-13-b">Code</h5>
                  <small>{code}</small>
                </div>
                <div className="col-6 text-left">
                  <h5 className="f-13-b">Location Type</h5>
                  <small>{type}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
