import NewsBlock from "./NewsBlock";
import { Routes, Route } from "react-router-dom";
const NavRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<NewsBlock key="general" category="general" />} />
      <Route exact path="/sports" element={<NewsBlock key="sports" category="Sport " />} />
      <Route exact path="/science" element={<NewsBlock key="science" category="Science" />} />
      <Route exact path="/Business" element={<NewsBlock key="business" category="business" />} />
      <Route
        exact
        path="/Technology"
        element={<NewsBlock key="technology" category="technology" />}
      />
      <Route
        exact // direct the url if fully match with the path
        path="/Entertainment"
        element={<NewsBlock key="entertainment" category="entertainment" />}
      />
    </Routes>
  );
};

export default NavRoutes;
