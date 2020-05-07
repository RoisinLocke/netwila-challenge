import React from "react";
import "../custom.css";

export default function LocationCard() {
  return (
    <div>
      <div className="card mb-3" style={{ maxWidth: 540 + "px" }}>
        <div className="row no-gutters">
          <div className="col-md-12">
            <div className="bg-light  border-left pl10">
              <h5 className="card-title">AL DRZ</h5>
              <div className="row mt-4 p0">
                <div className="col-6 text-left">
                  <h5 className="f-13-b">Code</h5>
                  <small>AL DRZ</small>
                </div>
                <div className="col-6 text-left">
                  <h5 className="f-13-b">Location Type</h5>
                  <small>Port</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
