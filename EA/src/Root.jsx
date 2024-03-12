import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage";
export function Root() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:language" element={<HomePage />}/>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
