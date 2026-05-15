import { Stethoscope } from "lucide-react";

export default function Navbar() {
  return (
    <div className="w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 p-2 rounded-xl">
            <Stethoscope className="text-white" size={22} />
          </div>

          <div>
            <h1 className="font-bold text-xl text-gray-800">
              HealthCare Pro
            </h1>
            <p className="text-sm text-gray-500">
              Appointment Management System
            </p>
          </div>
        </div>

       
      </div>
    </div>
  );
}