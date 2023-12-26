import DepthTest from "./tests/DepthTest.jsx";
import Ratelimit from "./tests/RateTest.jsx";
import { useState } from "react";


const Sampletest = () =>{
    const [test, setTest] = useState()
    const [count, setCount] = useState(0)

    // const navigate = useNavigate(); 

    const handleButtonClick = (e) => {
        console.log('test', test)
        if(test === 'DepthTest'){
            return(
                <div>
                    <DepthTest />
                </div>
            )
        }
        // navigate('/depthTest');
    }

    return(

        <>
    
    <h1>Sample Test</h1>
    <div className="testLinks">
            <button className='button-secondary' style={{marginRight: '10px'}} onClick={() =>{handleButtonClick(setTest('DepthTest'))}} >Depth Test</button>
            <button className='button-secondary' style={{marginRight: '10px'}}  onClick={() =>{handleButtonClick(setTest('RLTest'))}}>Rate Limiting</button>
            <button className='button-secondary' style={{marginRight: '10px'}} >Third test</button>
    </div>
            
            { test === 'DepthTest' && 
            <DepthTest />
            }
             { test === 'RLTest' && 
            <Ratelimit />
            }
  
    {/* <Routes>
        <Route path='/depthTest' element={ <DepthTest />}/>
    </Routes> */}
    </>
    )
    
}

export default Sampletest; 