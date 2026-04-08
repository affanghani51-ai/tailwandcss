import Herosection from './components/herosection.jsx'
import Navbar from './components/navbar.jsx'

import About from './components/about.jsx'
import Work from './components/work.jsx'
import Passion from './components/passion.jsx'
import Why from './components/why.jsx'
import Industries from './components/industries.jsx'
import Tech from './components/tech.jsx'
import Footer from './components/footer.jsx'

function App() {
  return (
    <>
      <Navbar />
      <Herosection />
      <Work />
      <Passion />
      <Why />
      <Industries />
      <Tech/>
      <About />
      <Footer/>



    </>
  )
}


export default App