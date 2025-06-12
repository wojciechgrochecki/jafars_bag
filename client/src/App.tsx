import { Route, Routes } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import DealPage from "@/pages/deal-details-page";
import LayoutWithNav from "./layouts/LayoutWithNav";
import AddDealPage from "./pages/add-deal-page";
import AccountPage from "./pages/account-page";
import MyDeals from "./pages/account-page/MyDeals";
import SavedDeals from "./pages/account-page/SavedDeals";
import DesktopNav from "./components/nav/DesktopNav";

function App() {
  return (
    <div className="contents lg:grid lg:grid-rows-[auto_1fr] lg:gap-4">
      <DesktopNav />
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
    </div>
  );
}

export default App;
