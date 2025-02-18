import React, { useState } from "react";
import Navbar from "./Navbar";
import EventModal from "./EventModal";
import Hero from "./Hero";
import { Calendar, Clock, MapPin } from "lucide-react";
import Features from "./Features";
import Stats from "./Stats";
import Footer from "./Footer";

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
      Weekly_fee:"900",
      registration_fee:"100",
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
      Weekly_fee:"900",
      registration_fee:"100",
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
      Weekly_fee:"900",
      registration_fee:"100",
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
      Weekly_fee:"900",
      registration_fee:"100",
    },
  ];
function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState("");

  const openModal = (program) => {
    setIsModalOpen(true);
    setSelectedProgram(program);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProgram("");
  };

  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        
        <section className="w-full bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Upcoming Programs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {programs.map((program) => (
            <div key={program.id} className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={program.image} alt={program.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <span className="text-sm font-medium text-blue-600 mb-2 block">{program.subject}</span>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">{program.title}</h3>
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600">
            <Calendar className="h-4 w-4 mr-2" />
            <span className="text-sm">{program.date}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="h-4 w-4 mr-2" />
            <span className="text-sm">{program.time}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <MapPin className="h-4 w-4 mr-2" />
            <span className="text-sm">{program.location}</span>
          </div>
        </div>
        <button onClick={() => openModal(program)} className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors">
          View Details
        </button>
      </div>
    </div>
          ))}
        </div>
      </div>
    </section>
        <Features />
        <Stats />
      </main>
      <Footer />
      {isModalOpen && <EventModal program={selectedProgram} closeModal={closeModal} />}
    </div>
  );
}

export default Home;
