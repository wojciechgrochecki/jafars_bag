import { Route, Routes } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import DealPage from "@/pages/DealPage";
import LayoutWithNav from "./layouts/LayoutWithNav";

function App() {
  return (
    <>
      <Routes>
        <Route element={<LayoutWithNav />}>
          <Route index path="/" element={<HomePage />} />
        </Route>
        <Route path="okazja/:id" element={<DealPage />} />
      </Routes>
    </>
  );
}

export default App;
