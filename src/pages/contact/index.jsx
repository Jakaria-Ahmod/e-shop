import React from 'react';
import ContactMap from './components/contactMap';
import ContactLeftLayoute from './components/contactBody/LeftLayoute';
import ContactRightLayoute from './components/contactBody/RightLayoute';
import ContactBanner from './components/contactBanner';

const Contact = () => {
  return (
    <div>
      <div className="container">
        <ContactMap></ContactMap>
        <div className=" grid  xl:grid-cols-[2fr_1fr] gap-x-[56px]">
          <ContactLeftLayoute></ContactLeftLayoute>
          <ContactRightLayoute></ContactRightLayoute>
        </div>
        <ContactBanner></ContactBanner>
      </div>
    </div>
  );
};

export default Contact;
