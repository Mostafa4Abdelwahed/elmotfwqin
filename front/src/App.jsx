import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "./Components/Layout";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/login";
import Register from "./Pages/Register/Register";
import LayoutProfile from "./Components/Profile/Layout";
import Units from "./Pages/Profile/Units/Units";
import WatchLater from "./Pages/Profile/WatchLater/WatchLater";
import History from "./Pages/Profile/History/History";
import Settings from "./Pages/Profile/Settings/Settings";
import Lessons from "./Pages/Profile/Lessons/Lessons";
import Subjects from "./Pages/Profile/Subjects/Subjects";
import Lesson from "./Pages/Profile/Lesson/Lesson";
import Blog from "./Pages/Blog/BlogPage/Blog";
import CookieService from "./Services/CookieService";
import Article from "./Pages/Blog/Article/Article";
import Error from "./Components/Error"

function App() {
  const token = CookieService.get("jwt");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="login"
            element={token ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="register"
            element={token ? <Navigate to="/" /> : <Register />}
          />
          <Route path="blog" element={<Blog />} />
            <Route path="/blog/:id" element={<Article />} />
        </Route>
        <Route
          path="/profile"
          element={token ? <LayoutProfile /> : <Navigate to="/" />}
        >
          <Route index element={token ? <Subjects /> : <Navigate to="/" />} />
          <Route
            path=":lang/units"
            element={token ? <Units /> : <Navigate to="/" />}
          />
          <Route
            path=":lang/units/:unity"
            element={token ? <Lessons /> : <Navigate to="/" />}
          />
          <Route
            path=":lang/units/:unity/:lessonSlug/:video"
            element={token ? <Lesson /> : <Navigate to="/" />}
          />
          <Route
            path="watch-later"
            element={token ? <WatchLater /> : <Navigate to="/" />}
          />
          <Route
            path="history"
            element={token ? <History /> : <Navigate to="/" />}
          />
          <Route
            path="settings"
            element={token ? <Settings /> : <Navigate to="/" />}
          />
        </Route>
          <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
