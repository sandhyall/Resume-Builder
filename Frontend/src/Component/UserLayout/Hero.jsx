import React from "react";
import Templete from "../../assets/Templete.avif";
import { Gift, ShieldCheck, StickyNote } from "lucide-react";

const Hero = () => {
  return (
    <section className="w-full bg-amber-50">
      <header
        className="max-w-7xl mx-auto px-6 pt-0 pb-10
 grid grid-cols-1 md:grid-cols-2 items-center"
      >
        <div>
          <p className="text-amber-600 font-semibold mb-3">
            Free Online Resume Builder
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Build a Job-Winning Resume <br />
            <span className="text-amber-600">— 100% Free</span>
          </h1>

          <p className="text-gray-600 text-lg mb-8 max-w-xl">
            Perfect for students & freshers. Build a clean, ATS-friendly,
            job-ready resume with FreeGiv — free forever.
          </p>

          <button className="px-8 py-3 bg-amber-600 text-white font-semibold rounded-xl shadow-md hover:bg-amber-700 transition">
            Get Started Free
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={Templete}
            alt="Resume Template Preview"
            className="w-full max-w-md rounded-2xl shadow-xl"
          />
        </div>
      </header>
     <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
  

  <div className="flex flex-col items-center gap-3 bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
    <Gift className="w-12 h-12 text-amber-600" />
    <p className="text-gray-700 font-medium">
      Resume, <br /> Free Forever
    </p>
  </div>

 
  <div className="flex flex-col items-center gap-3 bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
    <ShieldCheck className="w-12 h-12 text-amber-600" />
    <p className="text-gray-700 font-medium">
      Privacy & <br /> GDPR Compliant
    </p>
  </div>

  
  <div className="flex flex-col items-center gap-3 bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
    <StickyNote className="w-12 h-12 text-amber-600" />
    <p className="text-gray-700 font-medium">
      Professional <br /> Templates
    </p>
  </div>

</div>

    </section>
  );
};

export default Hero;
