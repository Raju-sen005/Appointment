import { BrowserRouter, Routes, Route } from "react-router-dom";
import DoctorPanel from "../pages/doctor/DoctorPanel";
import PatientPanel from "../pages/patient/PatientPanel";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PatientPanel />} />
        <Route path="https://appointment-l8fr.onrender.com/doctor" element={<DoctorPanel />} />
      </Routes>
    </BrowserRouter>
  );
}
