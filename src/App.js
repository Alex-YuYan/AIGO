import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import Background from "./Background";
import Intro from "./Intro";

function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="bg" element={<Background />}/>
     </Routes>
    </>
  );
}

export default App;
