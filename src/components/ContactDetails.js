import React from "react";
import "../custom.css";

export default function ContactDetails() {
  return (
    <section>
      <h5 className="m-title">Contact Information</h5>
      <div className="row mt-4 p0">
        <div className="col-3 text-left">
          <h5 className="f-13-b">First Name</h5>
          <small>Durres (Durazzo)</small>
        </div>
        <div className="col-3 text-left">
          <h5 className="f-13-b">Last name</h5>
          <small>NA</small>
        </div>
        <div className="col-3 text-left">
          <h5 className="f-13-b">Mobile No.</h5>
          <small>09989 09988</small>
        </div>
        <div className="col-3 text-left">
          <h5 className="f-13-b">Email</h5>
          <small>dummydomain@fakeid.com</small>
        </div>
      </div>
    </section>
  );
}
