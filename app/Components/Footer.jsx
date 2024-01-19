import React from "react";
import DivComp from "./DivComp";

const Footer = () => {
  return (
    <footer className="bg-white flex flex-col items-center p-4">
      <div className="container mx-auto py-12 px-4 flex flex-col gap-5 lg:flex-row justify-between items-center">
        <div className="lg:w-1/3 mb-8 lg:mb-0">
          <h3 className="text-2xl font-semibold mb-4">About Shopwise</h3>
          <p className="text-gray-600">
            Our vision is to provide convenience and help increase your sales
            business.
          </p>
        </div>
        <div className="flex flex-row gap-20 px-10">
          <DivComp
            name="About"
            first="How it works"
            second="Featured"
            third="Partnership"
            fourth="Business Relation"
          />
          <DivComp
            name="Community"
            first="Events"
            second="Blog"
            third="Podcast"
            fourth="Invite a friend"
          />
          <DivComp
            name="Socials"
            first="Discord"
            second="Instagram"
            third="Twitter"
            fourth="Facebook"
          />
        </div>
      </div>
      <hr className="bg-gray-200 h-0.5 w-3/4 "/>
      <div className="flex flex-row p-4 justify-between w-full">
      <div>
        <p>©2022 ShopWise. All rights reserved</p>
        </div>
        <div className="flex flex-row gap-10">
            <p>Privacy & Policy</p>
            <p>Terms and Conditions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
