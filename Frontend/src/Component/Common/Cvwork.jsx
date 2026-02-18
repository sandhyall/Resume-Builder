import React from 'react';
import Edit from "../../assets/Edit.webp";
import Text from "../../assets/Text.webp";
import Tem from "../../assets/Tem.webp";

const Cvwork = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-7">
      <h1 className="text-3xl font-bold mb-12 text-center">How FlowCV works</h1>

    
      <div className="flex flex-col md:flex-row-reverse items-center mb-12 gap-7">
        <div className="md:w-1/2 text-left">
          <p className="text-lg leading-relaxed">
            <span className="font-semibold text-4xl">1. Add content</span><br />
            Build your resume — we'll guide you every step of the way to ensure it's professional and polished.
          </p>
        </div>
        <div className="md:w-1/2 flex ">
          <img src={Edit} alt="Add content" className="max-w-sm w-full rounded-lg" />
        </div>
      </div>

     
      <div className="flex flex-col md:flex-row-reverse items-center mb-12 gap-6">
        <div className="md:w-1/2 text-left">
          <p className="text-lg leading-relaxed">
            <span className="font-semibold text-4xl">2. Design effortlessly</span><br />
            Choose from over 50 templates and customize every detail to suit your style and career.
          </p>
        </div>
        <div className="md:w-1/2 flex ">
          <img src={Text} alt="Design" className="max-w-sm w-full rounded-lg" />
        </div>
      </div>

      
      <div className="flex flex-col md:flex-row-reverse items-center gap-6">
        <div className="md:w-1/2 text-left">
          <p className="text-lg leading-relaxed">
            <span className="font-semibold text-4xl">3. Download & Share</span><br />
            Download your resume as a PDF or share it online with your unique link.
          </p>
        </div>
        <div className="md:w-1/2 flex ">
          <img src={Tem} alt="Download" className="max-w-sm w-full rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default Cvwork;
