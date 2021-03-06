import React from "react";
import "../custom.css";
import Nav from "./Nav";
import PageDetails from "./PageDetails";

export default function Main(props) {
  const urlID = props;

  return (
    <section>
      <div className=" clearfix"></div>
      <div className="d-block bg-white p20 bg-lg mt-4 mlr-30">
        <Nav />
        <PageDetails url={urlID} />
      </div>
    </section>
  );
}
