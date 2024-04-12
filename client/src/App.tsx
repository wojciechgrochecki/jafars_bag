import { Route, Routes } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import DealPage from "@/pages/DealPage";
import LayoutWithNav from "./layouts/LayoutWithNav";
import AddDealLayout from "./pages/AddDealPage/AddDealFormLayout";
import LinkStep from "./pages/AddDealPage/LinkStep";
import DetailsStep from "./pages/AddDealPage/DetailsStep";
import DescriptionStep from "./pages/AddDealPage/DescriptionStep";
import ImagesStep from "./pages/AddDealPage/ImagesStep";

function App() {
  return (
    <>
      <Routes>
        <Route element={<LayoutWithNav />}>
          <Route index path="/" element={<HomePage />} />
        </Route>
        <Route path="okazja/:id" element={<DealPage />} />
        <Route path="dodaj-ogloszenie" element={<AddDealLayout />}>
          <Route index element={<LinkStep />} />
          <Route path={"szczegoly"} element={<DetailsStep />} />
          <Route path={"opis"} element={<DescriptionStep />} />
          <Route path={"zdjecia"} element={<ImagesStep />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
