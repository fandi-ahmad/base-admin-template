import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "@/pages/Dashboard";
import Profile from "@/pages/Profile";
import { CardPage, TablePage, IconPage } from "@/pages/component";

export const RoutesTemplate = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        
        <Route path="/component/card" element={<CardPage />} />
        <Route path="/component/table" element={<TablePage />} />
        <Route path="/component/icon" element={<IconPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesTemplate;