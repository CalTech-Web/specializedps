"use client";

import { useAppointmentModal, type DoctorPreset } from "@/components/sections/AppointmentModal";

interface AppointmentButtonProps {
  className?: string;
  children: React.ReactNode;
  doctorPreset?: DoctorPreset;
}

export default function AppointmentButton({ className, children, doctorPreset }: AppointmentButtonProps) {
  const { open } = useAppointmentModal();
  return (
    <button onClick={() => open(doctorPreset)} className={className}>
      {children}
    </button>
  );
}
