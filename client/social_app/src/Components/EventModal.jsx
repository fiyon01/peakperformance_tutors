import React from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import { Calendar, MapPin,Book } from "lucide-react";
import "./modals.css"
Modal.setAppElement("#root");

const EventModal = ({ program, closeModal }) => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    closeModal();
    navigate("/booking", { state: { program } });
  };

  return (
    <div className="overlay">
      <div className="modal sm:w-48 bg-gray-800 text-white overflow-y-auto overflow-x-hidden rounded-lg">
        <img className="rounded-lg" src={program.image} alt={program.title} />
        <h3 className="mt-4 text-2xl font-sans font-semibold">{program.title}</h3>
        <div className="mt-4 flex justify-between items-center">
          <div className="flex flex-col">
            <div className="flex items-center mt-3">
              <Calendar className="text-white mr-2" />
              <h4 className="text-white text-base text-center">{program.date}</h4>
            </div>
            <div className="flex items-center mt-3">
              <MapPin className="text-white mr-2" />
              <h4 className="text-white text-base text-center">{program.location}</h4>
            </div>
            <div className="flex items-center mt-3">
              <Book className="text-white mr-2" />
              <h4 className="text-white text-base text-center">{program.subject}</h4>
            </div>
            <div className="flex items-center mt-3">
              <Book className="text-white mr-2" />
              <h4 className="text-white text-base text-center">{program.Weekly_fee}</h4>
            </div>
            <div className="flex items-center mt-3">
              <Book className="text-white mr-2" />
              <h4 className="text-white text-base text-center">{program.registration_fee}</h4>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-3">
          <button
            onClick={closeModal}
            className="cursor-pointer bg-gray-500 text-white rounded-sm py-2 px-4 hover:bg-gray-400 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleBookNow}
            className="cursor-pointer bg-blue-500 text-white rounded-sm py-2 px-4 hover:bg-blue-600 transition-colors"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventModal;
