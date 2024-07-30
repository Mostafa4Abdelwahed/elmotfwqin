import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import Certificates from "./Pages/Profile/Certificates/Certificates";
import Settings from "./Pages/Profile/Settings/Settings";
// import Teachers from "./Pages/Profile/Teachers/Teachers";
import Lessons from "./Pages/Profile/Lessons/Lessons"
import Subjects from "./Pages/Profile/Subjects/Subjects";
import Lesson from "./Pages/Profile/Lesson/Lesson";
import Quiz from "./Pages/Profile/Quiz/Quiz";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
        <Route path="/profile" element={<LayoutProfile />}>
          <Route index element={<Subjects />} />
          {/* <Route path=":lang/teachers" element={<Teachers />} /> */}
          <Route path=":lang/units" element={<Units />} />
          <Route path=":lang/units/:unity" element={<Lessons />} />
          <Route path=":lang/units/:unity/:lessonSlug/:video" element={<Lesson />} />
          <Route path=":lang/units/:unity/quiz/:id" element={<Quiz />} />
          <Route path="watch-later" element={<WatchLater />} />
          <Route path="history" element={<History />} />
          <Route path="certificates" element={<Certificates />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
