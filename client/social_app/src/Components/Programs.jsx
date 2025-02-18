import React from "react";
import ProgramCard from "./ProgramCard";
const programs = [
  {
    id:"1",
    title: "Advanced Mathematics Masterclass",
    image:
      "https://images.unsplash.com/photo-1596496050827-8299e0220de1?ixlib=rb-4.0.3",
    date: "June 15, 2024",
    time: "2:00 PM - 4:00 PM",
    location: "Main Campus, Room 204",
    subject: "Mathematics",
  },
  {
    id:"2",
    title: "Science Lab Workshop",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3",
    date: "June 18, 2024",
    time: "3:00 PM - 5:00 PM",
    location: "Science Building, Lab 101",
    subject: "Science",
  },
  {
    id:"3",
    title: "English Literature Discussion",
    image:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3",
    date: "June 20, 2024",
    time: "1:00 PM - 3:00 PM",
    location: "Library Hall",
    subject: "English",
  },
  {
    id:"4",
    title: "SAT Prep Course",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3",
    date: "June 22, 2024",
    time: "10:00 AM - 12:00 PM",
    location: "Study Center, Room 305",
    subject: "Test Prep",
  },
];
 const ProgramsList = ({openModal}) => {
  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Upcoming Programs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {programs.map((program) => (
            <ProgramCard key={program.id} program={program} openModal={openModal} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProgramsList