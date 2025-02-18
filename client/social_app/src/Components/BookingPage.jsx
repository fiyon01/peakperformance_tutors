import React, { useState } from 'react';
import { XCircle } from 'lucide-react'; // Import the Lucide React 'XCircle' icon
import { useLocation } from "react-router-dom";
import axios from "axios";

function BookingPage() {
  const location = useLocation(); // Call the hook as a function
  const [numStudents, setNumStudents] = useState(1);
  const [students, setStudents] = useState([{ name: '', grade: '' }]);
  const [parentName, setParentName] = useState(''); // New state for parent name
  const [errorRegistration, setErrorRegistration] = useState("");

  const event = location.state?.program; // This will hold the program data passed from EventModal

  // If event is not found, display a message and don't proceed
  if (!event) {
    return <div className="text-white">Event not found. Please try again.</div>;
  }

  // Handle the number of students change
  const handleNumStudentsChange = (event) => {
    const newNum = event.target.value;
    setNumStudents(newNum);

    // Update students array to match the new number of students
    const updatedStudents = Array.from({ length: newNum }, (_, index) => ({
      name: students[index]?.name || '',
      grade: students[index]?.grade || ''
    }));
    setStudents(updatedStudents);
  };

  // Handle input changes for each student's details
  const handleStudentChange = (index, field, value) => {
    const updatedStudents = [...students];
    updatedStudents[index][field] = value;
    setStudents(updatedStudents);
  };

  // Remove a student from the list
  const removeStudent = (index) => {
    const updatedStudents = students.filter((_, i) => i !== index);
    setStudents(updatedStudents);
    setNumStudents(updatedStudents.length); // Update numStudents to reflect the new count
  };

  // Calculate total price
  const totalPrice = parseFloat(event.registration_fee) * numStudents;

  const handleBooking = async (e) => {
    e.preventDefault();
    alert("data sent");
    // Here you can call your API to book the event
    const response = await axios.post("http://localhost:3500/api/registrations", {
      parentName,
      students,
      totalPrice,
      eventId: event.id
    });
    // Handle response (maybe show success message or redirect)
  };

  return (
    <div className="booking h-screen w-screen bg-gray-900 flex flex-col items-center overflow-x-hidden">
      <div className="container max-w-4xl mx-auto px-4 py-8">
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 w-full md:w-[600px] xl:w-[700px] overflow-y-auto">
          {/* Event Header */}
          <div className="w-full md:w-2/3 flex flex-col items-start">
            <h1 className="text-3xl font-semibold text-white">{event.title ? event.title : "N/A"}</h1>
            <p className="text-lg text-white mt-2">Location: {event.location}</p>
            <p className="text-lg text-white mt-1">Date: {event.date ? event.date.replace(/-/g, "/") : "N/A"}</p>
            <p className="text-lg text-white mt-1">
              <span className="pr-1">Ksh</span>{totalPrice}
            </p>
          </div>

          {/* Booking Form */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Book Your Tutoring Session</h2>
            <form className="space-y-6">
              {/* Parent Name Field */}
              <div className="flex flex-col">
                <label htmlFor="parentName" className="text-white font-semibold">Parent's Name</label>
                <input
                  type="text"
                  id="parentName"
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                  placeholder="Enter parent's name"
                  className="mt-2 p-3 border text-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-white"
                />
              </div>

              {/* Number of Students */}
              <div className="flex flex-col">
                <label htmlFor="numStudents" className="text-white font-semibold">Number of Students</label>
                <select
                  id="numStudents"
                  value={numStudents}
                  onChange={handleNumStudentsChange}
                  className="mt-2 p-3 w-full border text-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {[...Array(5).keys()].map((num) => (
                    <option
                      key={num}
                      value={num + 1}
                      className="text-white bg-gray-800 w-48"
                    >
                      {num + 1} Student{num + 1 > 1 ? 's' : ''}
                    </option>
                  ))}
                </select>
              </div>

              {/* Student Details */}
              {students.map((student, index) => (
                <div key={index} className="space-y-4">
                  <div className="flex flex-col">
                    <label htmlFor={`studentName-${index}`} className="text-white font-semibold">
                      Student {index + 1} Name
                    </label>
                    <input
                      type="text"
                      id={`studentName-${index}`}
                      value={student.name}
                      onChange={(e) => handleStudentChange(index, 'name', e.target.value)}
                      placeholder="Enter student's name"
                      className="mt-2 p-3 border text-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-white"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor={`studentGrade-${index}`} className="text-white font-semibold">
                      Student {index + 1} Grade/Form
                    </label>
                    <input
                      type="text"
                      id={`studentGrade-${index}`}
                      value={student.grade}
                      onChange={(e) => handleStudentChange(index, 'grade', e.target.value)}
                      placeholder="Enter student's grade/form"
                      className="mt-2 p-3 border border-gray-300 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-white"
                    />
                  </div>

                  {/* Remove Student Button */}
                  {students.length > 1 && (
                    <div className="flex justify-end mt-2">
                      <button
                        type="button"
                        onClick={() => removeStudent(index)}
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <XCircle className="h-5 w-5" />
                      </button>
                    </div>
                  )}
                </div>
              ))}

              {/* Summary */}
              <div className="flex justify-between items-center">
                <span className="text-xl font-semibold text-white">Student(s):</span>
                <h1 className="text-md font-semibold text-white">{numStudents}</h1>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xl font-semibold text-white">Total:</span>
                <h1 className="text-md font-semibold text-white">
                  <span className="pr-1">Ksh</span>{totalPrice}
                </h1>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center mt-6">
                <button onClick={handleBooking} className="bg-blue-500 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  Confirm Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingPage;
