import Herosection from './components/herosection.jsx'
import Navbar from './components/navbar.jsx'

import About from './components/about.jsx'
import Work from './components/work.jsx'
import Passion from './components/passion.jsx'
import Why from './components/why.jsx'
import Industries from './components/industries.jsx'
import Tech from './components/tech.jsx'
import Cart  from './components/cart.jsx'

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
      <Cart name="Sara" age= "25" />
            <Cart name="ali" age= "26" />



    </>
  )
}


export default App