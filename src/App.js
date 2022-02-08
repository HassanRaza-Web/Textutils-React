
// import About from './components/About.js';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';
import React from 'react';
import { useState } from 'react';
import Alert from './components/Alert.js';
// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode has been enable', 'success')
    } else {
      setMode('dark');
      document.body.style.backgroundColor = 'gray';
      showAlert('Dark Mode has been enabled', 'success')
    }
  }
  // Show Alert Function 
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  return (

<>

{/* <BrowserRouter>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
      <Routes>
        <Route path='/about' element={<About />}> </Route>
          <Route path='/' element={<TextForm heading='Enter the Text to Analyze' showAlert={showAlert} mode={mode} />} >
        </Route>
      </Routes>
      </div>
    </BrowserRouter> */}




        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className='container'>


            {/* <About /> */}
            <TextForm heading='Enter the Text to Analyze' showAlert={showAlert} mode={mode} />


        </div>
        </>
  
  );
}

export default App;
