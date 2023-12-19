import { useState } from 'react'
import Docs from './Docs'
import BigPicture from './canvas'
import Features from './Features'
import Testsum from './TestSum'
import Devs from './DevInfo'

import{Link, Route, Routes} from 'react-router-dom'


// import './App.css'

const Home = () => {
  return(
    <>
    <div id='canvas'>
    <BigPicture />
   </div>
    <section className='main'> 
 {/* header/intro */}
 <h1>What is Qevlar</h1>

    {/* navbar */}
 <p className='text'>I'll tell ya what it is</p>

 </section>
<section>
 <Features />
 </section>
 <section>
  <Testsum />

 </section>
 <section>
  <Devs />
 </section>
 <section>
  <h1>Feet</h1>
  <p>My feet</p>
  <p>You're feet</p>
  <p>Our feet</p>
 </section>
    
 


    </>

  )
}

function App() {


  return (
    <>
    <div className='container'>

    <section className='sectionWrapper' >
      
    <h1 id='logo'>Qevlar</h1>
      <nav className='navBar'>  
      <Link to='/'>
      <button>Home</button>
      </Link>
      <Link to='/docs' className='link' id='docLink'>
        <button>Docs</button>
      </Link>
      <a><button>Contact</button></a>
      <a><button>Github</button></a>
     
      </nav>

    </section>

      <section className='sectionWrapper' id='routes'>
       
        <Routes>      
          <Route path='/' element={<Home />} />

          <Route path='/docs' element={<Docs/>}/>

        </Routes>


      </section>
      </div>
    </>
  )
}

export default App
