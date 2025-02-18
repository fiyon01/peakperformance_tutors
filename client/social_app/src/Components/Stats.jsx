import React from "react";
 const Stats = () => {
  return (
    <section className="w-full bg-blue-600 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">1000+</div>
            <div className="text-blue-100">Students Taught</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">95%</div>
            <div className="text-blue-100">Success Rate</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">50+</div>
            <div className="text-blue-100">Expert Tutors</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">15+</div>
            <div className="text-blue-100">Subjects</div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Stats