import React from "react";
import Navbar from "../coponents/Navbar";
import Email from "../coponents/Email";
import HeroImg2 from "../coponents/HeroImg2";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="CONTACT." text="Lets have a chat" />
      <Email />
    </div>
  );
};

export default Contact;
