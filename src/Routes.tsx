import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar, BodyContainer } from "@components/index";

import Catalog from "@pages/Catalog";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <BodyContainer>
        <Routes>
          <Route path="/" element={<Catalog />} />
        </Routes>
      </BodyContainer>
    </BrowserRouter>
  );
};

export default AppRoutes;
