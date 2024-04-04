import MobileNav from "./components/MobileNav/MobileNav";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route index path="/" element={<HomePage />} />
      </Routes>
      <MobileNav />
    </>
  );
}

export default App;
