import React from "react";
const Hero = () => {
  return (
    <section className="w-full bg-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Unlock Your Learning Potential
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our expert-led tutoring programs designed to help you excel in
            your studies
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};
export default Hero