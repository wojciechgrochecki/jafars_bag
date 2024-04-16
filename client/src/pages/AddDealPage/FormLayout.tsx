import { Outlet } from "react-router-dom";

export default function FormLayout() {
  return (
    <div className="flex h-fit min-h-screen flex-col  gap-8 bg-white px-4 py-3">
      <div className="h-14 bg-slate-300">navigation/stepper</div>
      <Outlet />
    </div>
  );
}
