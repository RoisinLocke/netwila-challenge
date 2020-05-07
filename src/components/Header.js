import React from "react";
import "../custom.css";
import Hero from "./Hero";
import Company from "./Company";

export default function Header() {
  return (
    <div data-spy="scroll">
      <Hero />
      <Company />
    </div>
  );
}
