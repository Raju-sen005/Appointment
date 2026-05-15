import { useState } from "react";
import {
  ArrowLeft,
  // Calendar,
  Check,
  Clock3,
  // Phone,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  // UserRound,
} from "lucide-react";

import Navbar from "../../components/Navbar";

export default function PatientPanel() {
  const [step, setStep] = useState(1);

  const [language, setLanguage] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [description, setDescription] = useState("");
  const [severity, setSeverity] = useState("");
  // const [selectedDoctor] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState("");
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const nextStep = () => setStep((prev) => prev + 1);

  const prevStep = () => setStep((prev) => prev - 1);

  const toggleSymptom = (symptom) => {
    setSelectedSymptoms((prev) =>
      prev.includes(symptom)
        ? prev.filter((item) => item !== symptom)
        : [...prev, symptom],
    );
  };

  const doctor = {
    id: 1,
    name: "Dr. Amit Sharma",
    specialist: "General Physician",
    experience: "12 Years Experience",
    clinic: "Healthcare Pro Clinic",
    availability: "Available Today",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d",
  };

  const slots = [
    "09:00 AM",
    "10:00 AM",
    "11:30 AM",
    "01:00 PM",
    "03:30 PM",
    "05:00 PM",
  ];

  const sendOtp = () => {
    if (mobile.length !== 10) {
      alert("Please enter valid mobile number");
      return;
    }

    const randomOtp = Math.floor(100000 + Math.random() * 900000).toString();

    setGeneratedOtp(randomOtp);
    setOtpSent(true);

    console.log("OTP:", randomOtp);

    alert(`Demo OTP sent successfully on WhatsApp.\n\nOTP: ${randomOtp}`);
  };

  const verifyOtp = () => {
    if (otp === generatedOtp) {
      nextStep();
    } else {
      alert("Invalid OTP");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navbar />

      <div className="max-w-5xl mx-auto px-4 py-8 md:py-12">
        {/* TOP HEADER */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-blue-600 text-white p-3 rounded-2xl shadow-lg shadow-blue-200">
              <Stethoscope size={26} />
            </div>

            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                Healthcare Appointment
              </h1>

              <p className="text-gray-500 mt-1">
                Secure online consultation & smart appointment booking
              </p>
            </div>
          </div>

          {/* PROGRESS */}
          <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100">
            <div className="flex justify-between mb-3">
              <span className="text-sm font-medium text-gray-500">
                Appointment Progress
              </span>

              <span className="text-sm font-semibold text-blue-600">
                Step {step} / 10
              </span>
            </div>

            <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
              <div
                className="bg-gradient-to-r from-blue-600 to-indigo-600 h-full rounded-full transition-all duration-500"
                style={{
                  width: `${(step / 10) * 100}%`,
                }}
              />
            </div>
          </div>
        </div>

        {/* MAIN CARD */}
        <div
          className="
            bg-white/90
            backdrop-blur-xl
            border border-white/40
            rounded-[32px]
            shadow-[0_15px_80px_rgba(0,0,0,0.08)]
            p-6 md:p-10
            animate-[fadeIn_.4s_ease]
          "
        >
          {/* STEP 1 */}
          {step === 1 && (
            <div className="text-center py-6">
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 mx-auto flex items-center justify-center shadow-xl shadow-blue-200">
                <Sparkles className="text-white" size={50} />
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-8">
                Welcome to HealthCare Pro
              </h2>

              <p className="text-gray-500 text-lg max-w-2xl mx-auto mt-5 leading-relaxed">
                Answer a few medical questions and we will help you find the
                right doctor and appointment timing.
              </p>

              <button
                onClick={nextStep}
                className="
                  mt-10
                  bg-gradient-to-r
                  from-blue-600
                  to-indigo-600
                  hover:scale-[1.02]
                  transition-all
                  text-white
                  px-10
                  py-4
                  rounded-2xl
                  font-semibold
                  shadow-xl
                  shadow-blue-200
                "
              >
                Start Consultation
              </button>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div>
              <StepHeader
                title="Choose Your Language"
                subtitle="Select your preferred consultation language."
              />

              <div className="grid md:grid-cols-2 gap-5">
                {["English", "Hindi", "Gujarati", "Marathi"].map((item) => (
                  <button
                    key={item}
                    onClick={() => setLanguage(item)}
                    className={`
            p-6
            rounded-3xl
            border
            text-left
            transition-all

            ${
              language === item
                ? "border-blue-600 bg-blue-50 shadow-lg shadow-blue-100"
                : "border-gray-200 hover:border-blue-400 hover:bg-blue-50"
            }
          `}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-gray-800">
                        {item}
                      </span>

                      {language === item && (
                        <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center">
                          <Check size={16} />
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>

              <StepButtons
                nextStep={nextStep}
                prevStep={prevStep}
                disableNext={!language}
              />
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div>
              <StepHeader
                title="Basic Information"
                subtitle="Please provide your basic details."
              />

              <div className="space-y-8">
                {/* NAME */}
                <div>
                  <label className="block mb-4 text-lg font-semibold text-gray-800">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    className="
            w-full
            border
            border-gray-300
            rounded-3xl
            p-5
            outline-none
            focus:ring-4
            focus:ring-blue-100
          "
                  />
                </div>
                {/* GENDER */}
                <div>
                  <label className="block mb-4 text-lg font-semibold text-gray-800">
                    Gender
                  </label>

                  <div className="grid md:grid-cols-3 gap-5">
                    {["Male", "Female", "Other"].map((item) => (
                      <button
                        key={item}
                        onClick={() => setGender(item)}
                        className={`
                p-5
                rounded-3xl
                border
                transition-all

                ${
                  gender === item
                    ? "border-blue-600 bg-blue-50 shadow-lg shadow-blue-100"
                    : "border-gray-200 hover:border-blue-400 hover:bg-blue-50"
                }
              `}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-semibold">{item}</span>

                          {gender === item && (
                            <Check size={18} className="text-blue-600" />
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* AGE */}
                <div>
                  <label className="block mb-4 text-lg font-semibold text-gray-800">
                    Age
                  </label>

                  <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="Enter your age"
                    className="
            w-full
            border
            border-gray-300
            rounded-3xl
            p-5
            outline-none
            focus:ring-4
            focus:ring-blue-100
          "
                  />
                </div>
              </div>

              <StepButtons
                nextStep={nextStep}
                prevStep={prevStep}
                disableNext={!gender || !age}
              />
            </div>
          )}

          {/* STEP 4 */}
          {step === 4 && (
            <div>
              <StepHeader
                title="What symptoms are you facing?"
                subtitle="Select all symptoms that apply to you."
              />

              <div className="grid md:grid-cols-2 gap-5">
                {[
                  "Fever",
                  "Headache",
                  "Cough",
                  "Cold",
                  "Chest Pain",
                  "Skin Allergy",
                  "Body Pain",
                  "Stomach Pain",
                ].map((item) => (
                  <button
                    key={item}
                    onClick={() => toggleSymptom(item)}
                    className={`
                      p-5 rounded-3xl border text-left transition-all duration-300

                      ${
                        selectedSymptoms.includes(item)
                          ? "border-blue-600 bg-blue-50 shadow-lg shadow-blue-100"
                          : "border-gray-200 hover:border-blue-400 hover:bg-blue-50"
                      }
                    `}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-gray-700">
                        {item}
                      </span>

                      {selectedSymptoms.includes(item) && (
                        <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center">
                          <Check size={16} />
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>

              <StepButtons
                nextStep={nextStep}
                prevStep={prevStep}
                disableNext={selectedSymptoms.length === 0}
              />
            </div>
          )}

          {/* STEP 5 */}
          {step === 5 && (
            <div>
              <StepHeader
                title="Describe your condition"
                subtitle="Please explain your symptoms briefly."
              />

              <textarea
                rows="7"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Example: I have fever and headache from the last 2 days..."
                className="
                  w-full
                  border border-gray-200
                  rounded-3xl
                  p-5
                  focus:outline-none
                  focus:ring-4
                  focus:ring-blue-100
                  focus:border-blue-500
                "
              />

              <StepButtons
                nextStep={nextStep}
                prevStep={prevStep}
                disableNext={!description.trim()}
              />
            </div>
          )}

          {/* STEP 6 */}
          {step === 6 && (
            <div>
              <StepHeader
                title="How severe is your condition?"
                subtitle="This helps us prioritize your consultation."
              />

              <div className="space-y-5">
                {["Mild", "Moderate", "Severe"].map((level) => (
                  <button
                    key={level}
                    onClick={() => setSeverity(level)}
                    className={`
                      w-full
                      rounded-3xl
                      p-6
                      border
                      text-left
                      transition-all

                      ${
                        severity === level
                          ? "border-blue-600 bg-blue-50 shadow-lg shadow-blue-100"
                          : "border-gray-200 hover:border-blue-400 hover:bg-blue-50"
                      }
                    `}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold">{level}</span>

                      {severity === level && (
                        <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center">
                          <Check size={16} />
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>

              <StepButtons
                nextStep={nextStep}
                prevStep={prevStep}
                disableNext={!severity}
              />
            </div>
          )}

          {/* STEP 7 */}
          {step === 7 && (
            <div>
              <StepHeader
                title="Your Assigned Doctor"
                subtitle="Based on your symptoms and medical condition."
              />

              <div
                className="
        relative
        overflow-hidden
        rounded-[32px]
        border border-blue-100
        bg-gradient-to-br
        from-white
        to-blue-50
        p-6 md:p-8
        shadow-xl
        shadow-blue-100
      "
              >
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  {/* IMAGE */}
                  <div className="md:col-span-1">
                    <div className="relative">
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="
                w-full
                h-[320px]
                object-cover
                rounded-3xl
              "
                      />

                      <div className="absolute top-4 left-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                        Online Consultation
                      </div>
                    </div>
                  </div>

                  {/* DETAILS */}
                  <div className="md:col-span-2">
                    <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                      <Stethoscope size={16} />
                      Verified Specialist
                    </div>

                    <h2 className="text-4xl font-bold text-gray-900 mt-5">
                      {doctor.name}
                    </h2>

                    <p className="text-xl text-blue-600 font-semibold mt-2">
                      {doctor.specialist}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4 mt-8">
                      <div className="bg-white rounded-2xl p-5 border border-gray-100">
                        <p className="text-gray-400 text-sm">Experience</p>

                        <h3 className="text-lg font-bold text-gray-800 mt-2">
                          {doctor.experience}
                        </h3>
                      </div>

                      <div className="bg-white rounded-2xl p-5 border border-gray-100">
                        <p className="text-gray-400 text-sm">Clinic</p>

                        <h3 className="text-lg font-bold text-gray-800 mt-2">
                          {doctor.clinic}
                        </h3>
                      </div>

                      <div className="bg-white rounded-2xl p-5 border border-gray-100">
                        <p className="text-gray-400 text-sm">Availability</p>

                        <h3 className="text-lg font-bold text-green-600 mt-2">
                          {doctor.availability}
                        </h3>
                      </div>

                      <div className="bg-white rounded-2xl p-5 border border-gray-100">
                        <p className="text-gray-400 text-sm">Consultation</p>

                        <h3 className="text-lg font-bold text-gray-800 mt-2">
                          Video / In Clinic
                        </h3>
                      </div>
                    </div>

                    <button
                      onClick={nextStep}
                      className="
              mt-8
              bg-gradient-to-r
              from-blue-600
              to-indigo-600
              hover:scale-[1.02]
              transition-all
              text-white
              px-8
              py-4
              rounded-2xl
              font-semibold
              shadow-lg
              shadow-blue-200
            "
                    >
                      Continue Booking
                    </button>
                  </div>
                </div>
              </div>

              <button
                onClick={prevStep}
                className="
        mt-8
        flex items-center gap-2
        text-gray-600
        hover:text-black
      "
              >
                <ArrowLeft size={18} />
                Back
              </button>
            </div>
          )}

          {/* STEP 8 */}
          {step === 8 && (
            <div>
              <StepHeader
                title="Select Appointment Slot"
                subtitle="Choose your preferred consultation timing."
              />

              <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                {slots.map((slot) => (
                  <button
                    key={slot}
                    onClick={() => setSelectedSlot(slot)}
                    className={`
                      rounded-3xl
                      p-6
                      border
                      transition-all

                      ${
                        selectedSlot === slot
                          ? "border-blue-600 bg-blue-50 shadow-lg shadow-blue-100"
                          : "border-gray-200 hover:border-blue-400 hover:bg-blue-50"
                      }
                    `}
                  >
                    <div className="flex flex-col items-center">
                      <Clock3 className="mb-3 text-blue-600" />

                      <span className="font-semibold text-gray-700">
                        {slot}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              <StepButtons
                nextStep={nextStep}
                prevStep={prevStep}
                disableNext={!selectedSlot}
              />
            </div>
          )}

          {/* STEP 9 */}
          {step === 9 && (
            <div>
              <StepHeader
                title="Secure Verification"
                subtitle="Verify your mobile number to confirm appointment."
              />

              <div className="max-w-xl mx-auto">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-[32px] p-8">
                  <div className="w-20 h-20 rounded-full bg-blue-600 mx-auto flex items-center justify-center shadow-xl shadow-blue-200">
                    <ShieldCheck className="text-white" size={36} />
                  </div>

                  <h3 className="text-2xl font-bold text-center text-gray-900 mt-6">
                    WhatsApp OTP Verification
                  </h3>

                  <p className="text-center text-gray-500 mt-3 leading-relaxed">
                    A secure verification code will be sent to your WhatsApp
                    number.
                  </p>

                  {/* MOBILE */}
                  <div className="mt-8">
                    <label className="block mb-3 font-semibold text-gray-700">
                      Mobile Number
                    </label>

                    <div className="flex rounded-2xl overflow-hidden border border-gray-300 bg-white">
                      <div className="px-5 flex items-center bg-gray-50 font-semibold">
                        +91
                      </div>

                      <input
                        type="text"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        placeholder="9876543210"
                        className="
                flex-1
                p-4
                outline-none
              "
                      />
                    </div>
                  </div>

                  {/* SEND OTP */}
                  {!otpSent && (
                    <button
                      onClick={sendOtp}
                      className="
              w-full
              mt-8
              bg-gradient-to-r
              from-green-500
              to-emerald-600
              text-white
              py-4
              rounded-2xl
              font-semibold
              shadow-xl
              shadow-green-200
              hover:scale-[1.01]
              transition-all
            "
                    >
                      Send OTP on WhatsApp
                    </button>
                  )}

                  {/* OTP INPUT */}
                  {otpSent && (
                    <div className="mt-8 animate-[fadeIn_.4s_ease]">
                      <label className="block mb-3 font-semibold text-gray-700">
                        Enter OTP
                      </label>

                      <input
                        type="text"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        placeholder="Enter 6-digit OTP"
                        className="
                w-full
                border
                border-gray-300
                rounded-2xl
                p-4
                outline-none
                focus:ring-4
                focus:ring-blue-100
              "
                      />

                      <button
                        onClick={verifyOtp}
                        className="
                w-full
                mt-6
                bg-gradient-to-r
                from-blue-600
                to-indigo-600
                text-white
                py-4
                rounded-2xl
                font-semibold
                shadow-xl
                shadow-blue-200
              "
                      >
                        Verify & Confirm Appointment
                      </button>

                      <button
                        className="
                mt-4
                text-blue-600
                text-sm
                font-medium
                hover:underline
              "
                      >
                        Resend OTP
                      </button>
                    </div>
                  )}
                </div>

                <button
                  onClick={prevStep}
                  className="
          mt-8
          flex items-center gap-2
          text-gray-600
          hover:text-black
        "
                >
                  <ArrowLeft size={18} />
                  Back
                </button>
              </div>
            </div>
          )}

          {/* SUCCESS */}
          {step === 10 && (
            <div className="text-center py-6">
              <div className="relative w-36 h-36 mx-auto">
                <div className="absolute inset-0 rounded-full bg-green-200 animate-ping opacity-30" />

                <div className="relative w-full h-full rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center shadow-2xl shadow-green-200">
                  <Check className="text-white" size={70} />
                </div>
              </div>

              <h2 className="text-5xl font-bold text-gray-900 mt-10">
                Appointment Confirmed
              </h2>

              <p className="text-gray-500 text-lg max-w-2xl mx-auto mt-5 leading-relaxed">
                Your appointment has been booked successfully. Confirmation
                details have been sent to your WhatsApp number.
              </p>

              {/* SUMMARY */}
              <div className="max-w-2xl mx-auto mt-12 bg-white rounded-[32px] border border-gray-100 shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6">
                  <h3 className="text-2xl font-bold">Appointment Details</h3>
                </div>

                <div className="p-8 space-y-6">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                    <span className="text-gray-500">Doctor</span>

                    <span className="font-bold text-gray-800">
                      {doctor.name}
                    </span>
                  </div>

                  <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                    <span className="text-gray-500">Specialist</span>

                    <span className="font-bold text-gray-800">
                      {doctor.specialist}
                    </span>
                  </div>

                  <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                    <span className="text-gray-500">Appointment Time</span>

                    <span className="font-bold text-gray-800">
                      {selectedSlot}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">WhatsApp Number</span>

                    <span className="font-bold text-gray-800">
                      +91 {mobile}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                <button
                  className="
          bg-gradient-to-r
          from-blue-600
          to-indigo-600
          text-white
          px-8
          py-4
          rounded-2xl
          font-semibold
          shadow-xl
          shadow-blue-200
        "
                >
                  Download Receipt
                </button>

                <button
                  className="
          border border-gray-300
          px-8
          py-4
          rounded-2xl
          font-semibold
          hover:bg-gray-50
        "
                >
                  Book Another Appointment
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ========================================================= */

function StepHeader({ title, subtitle }) {
  return (
    <div className="mb-10">
      <span className="text-blue-600 font-semibold text-sm tracking-widest uppercase">
        Healthcare Consultation
      </span>

      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
        {title}
      </h2>

      <p className="text-gray-500 mt-4 text-lg">{subtitle}</p>
    </div>
  );
}

/* ========================================================= */

function StepButtons({ nextStep, prevStep, disableNext = false }) {
  return (
    <div className="flex items-center justify-between mt-10">
      <button
        onClick={prevStep}
        className="
          flex items-center gap-2
          px-6
          py-3
          rounded-2xl
          border border-gray-300
          hover:bg-gray-50
          transition-all
        "
      >
        <ArrowLeft size={18} />
        Back
      </button>

      <button
        disabled={disableNext}
        onClick={nextStep}
        className={`
          px-8
          py-3
          rounded-2xl
          font-semibold
          transition-all

          ${
            disableNext
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-200 hover:scale-[1.02]"
          }
        `}
      >
        Continue
      </button>
    </div>
  );
}
