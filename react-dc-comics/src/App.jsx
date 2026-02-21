import Header from './components/header/Header.jsx'
import Main from './components/main/Main.jsx'
import Footer from './components/footer/Footer.jsx'
import navLinks from './data/navLinks.js'
import { useState } from 'react'

function App() {
  const [activeData, setActiveData] = useState(navLinks[1].data)
  const [sliceEnd, setSliceEnd] = useState(12)
  const [sliceStart, setSliceStart] = useState(0)

  return (
    <>
      <Header activeData={activeData} setActiveData={setActiveData} setSliceEnd={setSliceEnd} setSliceStart={setSliceStart} />
      <Main activeData={activeData} sliceEnd={sliceEnd} setSliceEnd={setSliceEnd} setSliceStart={setSliceStart} sliceStart={sliceStart} />
      <Footer />
    </>
  )

}

export default App
