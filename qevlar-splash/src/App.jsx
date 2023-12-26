import {  useEffect, useRef } from 'react'
import Docs from './Docs'
import BigPicture from './canvas'
import Features from './Features'
import Testsum from './TestSum'
import Devs from './DevInfo'
import Sampletest from './Samples'
import { FaGithub } from "react-icons/fa";
import 'prismjs/themes/prism.css';
import './App.css'


import{Link, Route, Routes} from 'react-router-dom'


// import './App.css'

const Home = () => {

  
  const observer = useRef(
    new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    })
  );
  
  useEffect(() => {
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.current.observe(el));
  
    // Clean up the observer when the component unmounts
    return () => {
      hiddenElements.forEach((el) => observer.current.unobserve(el));
    };
  }, []);
  

  return(
    <>
    <div id='canvas'>
    <BigPicture />
   </div>
    <section className='main'> 

 <h1>GraphQL Security Testing Toolkit</h1>
 <p>An ultra-lightweight security testing library for graphQL</p>
 <a href='https://github.com/oslabs-beta/Qevlar' >
 <button className="button-secondary"><FaGithub /> Download Qevlar On Github</button>
 </a>


    {/* navbar */}

 </section>

<section className='hidden'>
 <Features />
 </section>

 <section className='hidden'>
  <Testsum />
 </section>

 <section className='hidden'>
  <Sampletest />
 </section>

 <section className='hidden'>
  <Devs />
 </section>

 <section className='hidden'>
  <h1>Feet</h1>
  <p>My feet</p>
  <p>You're feet</p>
  <p>Our feet</p>
 </section>
    
 


    </>

  )
}

function App() {


// const observer = new IntersectionObserver((entries) =>{
//   entries.forEach((entry) =>{
//     if(entry.isIntersecting){
//       entry.target.classList.add('show');
//     } else{
//       entry.target.classList.remove('show')
//     }
//   })
// })

// const hiddenElements = document.querySelectorAll('.hidden')
// hiddenElements.forEach((el) => observer.observe(el))



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
      <a href='https://github.com/oslabs-beta/Qevlar'><button>Github</button></a>
     
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
