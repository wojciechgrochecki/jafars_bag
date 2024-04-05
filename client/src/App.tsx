import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MobileNav from "./components/Nav/MobileNav";

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
