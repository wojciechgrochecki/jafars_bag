import { Route, Routes } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import DealPage from "@/pages/DealPage";
import LayoutWithNav from "./layouts/LayoutWithNav";
import FormLayout from "./pages/AddDealPage/FormLayout";
import LinkStep from "./pages/AddDealPage/Steps/LinkStep";
import DetailsStep from "./pages/AddDealPage/Steps/DetailsStep";
import DescriptionStep from "./pages/AddDealPage/Steps/DescriptionStep";
import ImagesStep from "./pages/AddDealPage/Steps/ImagesStep";

function App() {
  return (
    <>
      <Routes>
        <Route element={<LayoutWithNav />}>
          <Route index path="/" element={<HomePage />} />
        </Route>
        <Route path="okazja/:id" element={<DealPage />} />
        <Route path="dodaj-ogloszenie" element={<FormLayout />}>
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
