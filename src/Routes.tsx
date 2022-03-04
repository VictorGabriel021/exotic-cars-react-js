import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Navbar, BodyContainer } from "@components/index";

import { Catalog, CatalogDetails, NotFound } from "@pages/index";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <BodyContainer>
        <Routes>
          <Route path="/" element={<Navigate replace to="/catalog" />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:catalogId" element={<CatalogDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BodyContainer>
    </BrowserRouter>
  );
};

export default AppRoutes;
