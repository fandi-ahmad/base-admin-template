import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "@/pages/Dashboard";
import { CardPage, TablePage, IconPage, InputPage } from "@/pages/component";

export const RoutesTemplate = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        
        <Route path="/component/card" element={<CardPage />} />
        <Route path="/component/table" element={<TablePage />} />
        <Route path="/component/icon" element={<IconPage />} />
        <Route path="/component/input" element={<InputPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesTemplate;