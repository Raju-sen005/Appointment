import { useState } from "react";
import Navbar from "../../components/Navbar";

import {
  CalendarDays,
  Clock3,
  IndianRupee,
  Phone,
  Search,
  Stethoscope,
  UserRound,
  Video,
  CheckCircle2,
  Activity,
} from "lucide-react";

export default function DoctorPanel() {
  const [activeTab, setActiveTab] = useState("appointments");

  const [search, setSearch] = useState("");

  const [selectedPatient, setSelectedPatient] = useState(null);

  const [showModal, setShowModal] = useState(false);

  const [appointments, setAppointments] = useState([
    {
      id: 1,
      patientName: "Rahul Sharma",
      gender: "Male",
      age: 28,
      language: "Hindi",
      symptoms: ["Fever", "Headache"],
      description: "Patient has fever and headache from the last 2 days.",
      severity: "Moderate",
      appointmentTime: "10:00 AM",
      date: "15 May 2026",
      mobile: "9876543210",
      // consultationType: "Video Consultation",
      status: "Confirmed",
    },

    {
      id: 2,
      patientName: "Priya Verma",
      gender: "Female",
      age: 34,
      language: "English",
      symptoms: ["Skin Allergy"],
      description: "Red rashes and itching on skin from last week.",
      severity: "Mild",
      appointmentTime: "01:00 PM",
      date: "15 May 2026",
      mobile: "9876501234",
      // consultationType: "In Clinic",
      status: "Pending",
    },
  ]);

  const filteredAppointments = appointments.filter((item) =>
    item.patientName.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* HEADER */}
        <div className="bg-white rounded-[32px] shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              {/* LEFT */}
              <div className="flex items-center gap-5">
                <img
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d"
                  alt="doctor"
                  className="w-28 h-28 rounded-3xl object-cover border-4 border-white/30"
                />

                <div>
                  <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md">
                    <Stethoscope size={16} />
                    Verified Doctor
                  </div>

                  <h1 className="text-4xl font-bold mt-4">Dr. Amit Sharma</h1>

                  <p className="text-blue-100 text-lg mt-2">
                    General Physician
                  </p>

                  <div className="flex flex-wrap gap-3 mt-5">
                    <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
                      12 Years Experience
                    </span>

                    <span className="bg-green-500/20 text-green-100 px-4 py-2 rounded-full text-sm">
                      Online Today
                    </span>
                  </div>
                </div>
              </div>

              {/* RIGHT */}
              <div className="grid grid-cols-2 gap-4">
                <StatsCard
                  title="Today's Appointments"
                  value="12"
                  icon={<CalendarDays size={22} />}
                />

                <StatsCard
                  title="Consultations"
                  value="248"
                  icon={<Video size={22} />}
                />

                <StatsCard
                  title="Revenue"
                  value="₹18K"
                  icon={<IndianRupee size={22} />}
                />

                <StatsCard
                  title="Patients"
                  value="1.2K"
                  icon={<UserRound size={22} />}
                />
              </div>
            </div>
          </div>

          {/* TABS */}
          <div className="px-6 pt-6">
            <div className="flex flex-wrap gap-4">
              <TabButton
                active={activeTab === "appointments"}
                onClick={() => setActiveTab("appointments")}
                label="Appointments"
              />

              <TabButton
                active={activeTab === "schedule"}
                onClick={() => setActiveTab("schedule")}
                label="Schedule"
              />

              <TabButton
                active={activeTab === "analytics"}
                onClick={() => setActiveTab("analytics")}
                label="Analytics"
              />
            </div>
          </div>

          {/* BODY */}
          <div className="p-6">
            {/* APPOINTMENTS */}
            {activeTab === "appointments" && (
              <div>
                {/* SEARCH */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-8">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">
                      Patient Appointments
                    </h2>

                    <p className="text-gray-500 mt-2">
                      Manage all upcoming patient consultations.
                    </p>
                  </div>

                  <div className="relative w-full lg:w-[350px]">
                    <Search
                      className="absolute left-4 top-4 text-gray-400"
                      size={20}
                    />

                    <input
                      type="text"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Search patient..."
                      className="
                        w-full
                        pl-12
                        pr-4
                        py-4
                        rounded-2xl
                        border border-gray-300
                        focus:outline-none
                        focus:ring-4
                        focus:ring-blue-100
                      "
                    />
                  </div>
                </div>

                {/* APPOINTMENTS LIST */}
                <div className="space-y-6">
                  {filteredAppointments.map((item) => (
                    <div
                      key={item.id}
                      className="
                        bg-white
                        border border-gray-100
                        rounded-[28px]
                        shadow-lg
                        overflow-hidden
                        hover:shadow-2xl
                        transition-all
                      "
                    >
                      {/* TOP */}
                      <div className="p-6 border-b border-gray-100">
                        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
                          {/* LEFT */}
                          <div className="flex items-start gap-5">
                            <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center text-2xl font-bold shadow-xl shadow-blue-200">
                              {item.patientName.charAt(0)}
                            </div>

                            <div>
                              <div className="flex flex-wrap items-center gap-3">
                                <h3 className="text-2xl font-bold text-gray-900">
                                  {item.patientName}
                                </h3>

                                <span
                                  className={`
                                    px-4 py-2 rounded-full text-sm font-medium
${
  item.status === "Completed"
    ? "bg-green-100 text-green-700"
    : item.status === "Pending"
      ? "bg-yellow-100 text-yellow-700"
      : "bg-blue-100 text-blue-700"
}
                                  `}
                                >
                                  {item.status}
                                </span>
                              </div>

                              <div className="flex flex-wrap gap-3 mt-4">
                                <InfoBadge label={`${item.age} Years`} />

                                <InfoBadge label={item.gender} />

                                <InfoBadge label={item.language} />

                                {/* <InfoBadge
                                  label={item.consultationType}
                                /> */}
                              </div>
                            </div>
                          </div>

                          {/* RIGHT */}
                          <div className="grid sm:grid-cols-2 gap-4">
                            <AppointmentInfo
                              icon={<CalendarDays size={18} />}
                              title="Date"
                              value={item.date}
                            />

                            <AppointmentInfo
                              icon={<Clock3 size={18} />}
                              title="Time"
                              value={item.appointmentTime}
                            />

                            <AppointmentInfo
                              icon={<Phone size={18} />}
                              title="Mobile"
                              value={item.mobile}
                            />

                            <AppointmentInfo
                              icon={<Activity size={18} />}
                              title="Severity"
                              value={item.severity}
                            />
                          </div>
                        </div>
                      </div>

                      {/* BODY */}
                      <div className="p-6">
                        {/* SYMPTOMS */}
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 mb-4">
                            Symptoms
                          </h4>

                          <div className="flex flex-wrap gap-3">
                            {item.symptoms.map((symptom) => (
                              <span
                                key={symptom}
                                className="
                                  bg-blue-50
                                  text-blue-700
                                  px-4
                                  py-2
                                  rounded-full
                                  font-medium
                                "
                              >
                                {symptom}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* DESCRIPTION */}
                        <div className="mt-8">
                          <h4 className="text-lg font-bold text-gray-900 mb-4">
                            Patient Description
                          </h4>

                          <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                            <p className="text-gray-600 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>

                        {/* ACTIONS */}
                        <div className="flex flex-wrap gap-4 mt-8">
                          <button
                            className="
                              bg-gradient-to-r
                              from-blue-600
                              to-indigo-600
                              text-white
                              px-6
                              py-3
                              rounded-2xl
                              font-semibold
                              shadow-lg
                              shadow-blue-200
                            "
                          >
                            Start Consultation
                          </button>

                          <button
                            onClick={() => {
                              setSelectedPatient(item);
                              setShowModal(true);
                            }}
                            className="
    border border-gray-300
    px-6
    py-3
    rounded-2xl
    font-semibold
    hover:bg-gray-50
  "
                          >
                            View Full Details
                          </button>

                          <button
                            onClick={() => {
                              setAppointments((prev) =>
                                prev.map((appt) =>
                                  appt.id === item.id
                                    ? {
                                        ...appt,
                                        status: "Completed",
                                      }
                                    : appt,
                                ),
                              );
                            }}
                            className="
    bg-green-100
    text-green-700
    px-6
    py-3
    rounded-2xl
    font-semibold
  "
                          >
                            Mark Completed
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SCHEDULE */}
            {activeTab === "schedule" && (
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">
                      Doctor Schedule
                    </h2>

                    <p className="text-gray-500 mt-2">
                      Manage your consultation timings.
                    </p>
                  </div>

                  <button
                    className="
                      bg-gradient-to-r
                      from-blue-600
                      to-indigo-600
                      text-white
                      px-6
                      py-4
                      rounded-2xl
                      font-semibold
                    "
                  >
                    Add Timing
                  </button>
                </div>

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {[
                    {
                      day: "Monday",
                      time: "09:00 AM - 01:00 PM",
                    },

                    {
                      day: "Tuesday",
                      time: "10:00 AM - 04:00 PM",
                    },

                    {
                      day: "Wednesday",
                      time: "09:00 AM - 02:00 PM",
                    },
                  ].map((item) => (
                    <div
                      key={item.day}
                      className="
                        bg-white
                        border border-gray-100
                        rounded-[28px]
                        p-6
                        shadow-lg
                      "
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">
                            {item.day}
                          </h3>

                          <p className="text-gray-500 mt-3">{item.time}</p>
                        </div>

                        <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                          <Clock3 size={24} />
                        </div>
                      </div>

                      <div className="flex gap-4 mt-8">
                        <button
                          className="
                            flex-1
                            bg-blue-600
                            text-white
                            py-3
                            rounded-2xl
                            font-semibold
                          "
                        >
                          Edit
                        </button>

                        <button
                          className="
                            flex-1
                            border border-red-300
                            text-red-600
                            py-3
                            rounded-2xl
                            font-semibold
                          "
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ANALYTICS */}
            {activeTab === "analytics" && (
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Analytics Dashboard
                </h2>

                <p className="text-gray-500 mt-2">
                  Track your healthcare performance and statistics.
                </p>

                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">
                  <AnalyticsCard
                    title="Appointments Completed"
                    value={appointments.length}
                  />

                  <AnalyticsCard title="Pending Appointments" value="12" />

                  <AnalyticsCard title="Total Revenue" value="₹1,84,000" />

                  <AnalyticsCard title="Success Rate" value="98%" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {showModal && selectedPatient && (
        <PatientModal
          patient={selectedPatient}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}

/* ======================================================== */

function StatsCard({ title, value, icon }) {
  return (
    <div className="bg-white/15 backdrop-blur-md rounded-3xl p-5 border border-white/20">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-blue-100">{title}</p>

          <h3 className="text-3xl font-bold mt-3">{value}</h3>
        </div>

        <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
          {icon}
        </div>
      </div>
    </div>
  );
}

/* ======================================================== */

function TabButton({ active, onClick, label }) {
  return (
    <button
      onClick={onClick}
      className={`
        px-6
        py-3
        rounded-2xl
        font-semibold
        transition-all

        ${
          active
            ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-200"
            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
        }
      `}
    >
      {label}
    </button>
  );
}

/* ======================================================== */

function InfoBadge({ label }) {
  return (
    <span
      className="
        bg-gray-100
        text-gray-700
        px-4
        py-2
        rounded-full
        text-sm
        font-medium
      "
    >
      {label}
    </span>
  );
}

/* ======================================================== */

function AppointmentInfo({ icon, title, value }) {
  return (
    <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
      <div className="flex items-center gap-3 text-gray-500">
        {icon}

        <span className="text-sm">{title}</span>
      </div>

      <h4 className="font-bold text-gray-900 mt-3">{value}</h4>
    </div>
  );
}

/* ======================================================== */

function AnalyticsCard({ title, value }) {
  return (
    <div
      className="
        bg-white
        rounded-[28px]
        border border-gray-100
        shadow-lg
        p-6
      "
    >
      <p className="text-gray-500">{title}</p>

      <h3 className="text-4xl font-bold text-gray-900 mt-4">{value}</h3>

      <div className="flex items-center gap-2 mt-6 text-green-600">
        <CheckCircle2 size={18} />

        <span className="font-medium">Updated Today</span>
      </div>
    </div>
  );
}

function PatientModal({ patient, onClose }) {
  return (
    <div
      className="
        fixed
        inset-0
        bg-black/50
        backdrop-blur-sm
        z-50
        flex
        items-center
        justify-center
        p-4
      "
    >
      <div
        className="
          bg-white
          rounded-[32px]
          max-w-3xl
          w-full
          max-h-[90vh]
          overflow-y-auto
          shadow-2xl
        "
      >
        {/* HEADER */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold">Patient Details</h2>

              <p className="text-blue-100 mt-2">
                Complete appointment information
              </p>
            </div>

            <button
              onClick={onClose}
              className="
                w-12
                h-12
                rounded-2xl
                bg-white/20
                text-white
                text-xl
              "
            >
              ✕
            </button>
          </div>
        </div>

        {/* BODY */}
        <div className="p-8">
          <div className="grid md:grid-cols-2 gap-6">
            <DetailCard title="Patient Name" value={patient.patientName} />

            <DetailCard title="Gender" value={patient.gender} />

            <DetailCard title="Age" value={`${patient.age} Years`} />

            <DetailCard title="Language" value={patient.language} />

            <DetailCard title="Mobile" value={patient.mobile} />

            <DetailCard title="Severity" value={patient.severity} />

            <DetailCard title="Appointment Date" value={patient.date} />

            <DetailCard
              title="Appointment Time"
              value={patient.appointmentTime}
            />
          </div>

          {/* SYMPTOMS */}
          <div className="mt-10">
            <h3 className="text-xl font-bold text-gray-900 mb-5">Symptoms</h3>

            <div className="flex flex-wrap gap-3">
              {patient.symptoms.map((symptom) => (
                <span
                  key={symptom}
                  className="
                    bg-blue-50
                    text-blue-700
                    px-5
                    py-3
                    rounded-full
                    font-medium
                  "
                >
                  {symptom}
                </span>
              ))}
            </div>
          </div>

          {/* DESCRIPTION */}
          <div className="mt-10">
            <h3 className="text-xl font-bold text-gray-900 mb-5">
              Description
            </h3>

            <div className="bg-gray-50 rounded-3xl p-6 border border-gray-100">
              <p className="text-gray-600 leading-relaxed">
                {patient.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DetailCard({ title, value }) {
  return (
    <div className="bg-gray-50 rounded-3xl p-5 border border-gray-100">
      <p className="text-sm text-gray-500">{title}</p>

      <h3 className="text-lg font-bold text-gray-900 mt-3">{value}</h3>
    </div>
  );
}
