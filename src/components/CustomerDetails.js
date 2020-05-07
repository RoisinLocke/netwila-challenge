import React from "react";
import "../custom.css";

export default function CustomerDetails() {
  return (
    <div>
      <h5 className="m-title">Contact Information</h5>
      <div className="row mt-4 p0">
        <div className="col-6 text-left">
          <h5 className="f-13-b">Customer Ref1</h5>
          <small>Durres (Durazzo)</small>
        </div>
        <div className="col-6 text-left">
          <h5 className="f-13-b">CustomerRef12</h5>
          <small>NA</small>
        </div>
      </div>
    </div>
  );
}
