import { Routes, Route, Link } from "react-router-dom";
import Prologue from "./Prologue";
import Intro from "./Intro";
import Notfound from "./Notfound";
import Plot1A from "./Plots/Plot1A";
import Plot1B from "./Plots/Plot1B";
import Plot2C from "./Plots/Plot2C";
import Plot2A from "./Plots/Plot2A";
import Plot2B from "./Plots/Plot2B";
import Plot3A from "./Plots/Plot3A";

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
        <Route path="plot1A" element={<Plot1A />} />
        <Route path="plot1B" element={<Plot1B />} />
        <Route path="plot2A" element={<Plot2A />} />
        <Route path="plot2B" element={<Plot2B />} />
        <Route path="plot2C" element={<Plot2C />} />
        <Route path="plot3A" element={<Plot3A />} />
        <Route path="*" element={<Notfound />} />
      </Routes>

      {/* Footer */}
      <div className="w-full pt-16 pb-6 text-sm text-center md:text-left fade-in">
        <span></span>
      </div>
    </>
  );
}

export default App;
