import { BrowserRouter, Routes, Route } from "react-router-dom"

import NavBar from "./common/NavBar"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Media from "./Pages/Media"
import Campaigns from "./Pages/Campaigns"
import Publication from "./Pages/Publication"

function App() {


  return (
    <>
      <BrowserRouter>
        <div> 
          <section className="lg:mb-[4.5rem] mb-[6.1rem]">
            <NavBar />
          </section>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<About />} />
              <Route path="/media" element={<Media />} />
              <Route path="/issues" element={<Campaigns />} />
              <Route path="/publications" element={<Publication />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
