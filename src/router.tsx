import { Routes, Route } from "react-router-dom";
import { RoutePath } from "types/routes";
import Home from "pages/Home/index";

export default function Router() {
  return (
    <Routes>
      <Route path={RoutePath.HOME} element={<Home />} />
    </Routes>
  );
};

