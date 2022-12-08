import { Routes, Route, Link } from "react-router-dom";
import Prologue from "./Prologue";
import Intro from "./Intro";

function App() {
  return (
    <>
      {/* Nav Bar */}
      <div class="w-full container mx-auto pt-5 pl-5">
        <div class="w-full flex items-center justify-between">
          <Link class="flex items-center text-indigo-300 no-underline hover:no-underline font-bold text-2xl lg:text-4xl" to="/">
            AI<span class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">GO</span>
          </Link>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="prologue" element={<Prologue />} />
      </Routes>
      {/* Footer */}
      <div className="w-full pt-16 pb-6 text-sm text-center md:text-left fade-in">
        <span></span>
      </div>
    </>
  );
}

export default App;
