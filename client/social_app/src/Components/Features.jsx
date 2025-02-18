import React from "react";
import { BookOpen, Users, Trophy, Target } from "lucide-react";
const features = [
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Expert Tutors",
    description:
      "Learn from certified professionals with years of teaching experience",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Small Groups",
    description:
      "Personalized attention with small class sizes of 4-6 students",
  },
  {
    icon: <Trophy className="h-6 w-6" />,
    title: "Proven Results",
    description:
      "90% of our students show significant improvement within 3 months",
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "Tailored Learning",
    description: "Customized study plans to meet your specific goals",
  },
];
const Features = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Features