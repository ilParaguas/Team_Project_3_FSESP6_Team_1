import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from ".";

export function Root() {

    return (
        <BrowserRouter>
        <Routes>
            <Route path="/:language" element={<HomePage  />} />
        </Routes>
        </BrowserRouter>
    )
}
