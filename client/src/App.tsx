import { Route, Routes } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import DealPage from "@/pages/DealPage";
import LayoutWithNav from "./layouts/LayoutWithNav";
import AddDealPage from "./pages/AddDealPage";
import AccountPage from "./pages/AccountPage";
import MyDeals from "./pages/AccountPage/MyDeals";
import SavedDeals from "./pages/AccountPage/SavedDeals";

function App() {
  return (
    <>
      <Routes>
        <Route element={<LayoutWithNav />}>
          <Route index path="/" element={<HomePage />} />
          <Route path="konto" element={<AccountPage />} />
        </Route>
        <Route path="okazja/:id" element={<DealPage />} />
        <Route path="dodaj-ogloszenie/*" element={<AddDealPage />} />
        <Route path="konto/moje-okazje" element={<MyDeals />} />
        <Route path="konto/zapisane-okazje" element={<SavedDeals />} />
      </Routes>
    </>
  );
}

export default App;
