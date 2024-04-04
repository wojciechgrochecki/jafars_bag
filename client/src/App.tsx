import MobileNav from "./components/MobileNav/MobileNav";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="relative h-fit min-h-screen w-full bg-slate-50">
      <Routes>
        <Route index path="/" element={<HomePage />} />
      </Routes>
      <MobileNav />
    </div>
  );
}

export default App;
