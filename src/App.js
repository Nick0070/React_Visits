
import './App.scss';
import  {Home}  from './Pages/Home/Home'
import  {Works}  from './Pages/Works/Works'
import { RingLoader } from 'react-spinners';
import React, {useState,useEffect} from 'react';
import  {Information}  from './Pages/Information/Information'
import { MainLayout } from './Components/Layouts/Layouts'
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  const [loading, setloading] = useState (false);
    useEffect( ()=>{
      setloading(true);
      setTimeout(()=>{
      setloading(false)
    },500) 
  },[])

  return (
      <div className='style'>

            {/* {
                loading?
                <RingLoader 
                  size={100} 
                  color="#ffff" 
                  className='load' 
                  loading={loading}
                  />
                :
              <MainLayout>
                <BrowserRouter>
                      <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/Works' element={<Works/>}/>
                        <Route path='/information' element={<Information/>}/> 
                      </Routes>
                </BrowserRouter>
              </MainLayout>
            } */}



              <MainLayout>
                <BrowserRouter>
                      <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/Works' element={<Works/>}/>
                        <Route path='/information' element={<Information/>}/> 
                      </Routes>
                </BrowserRouter>
              </MainLayout>







      </div>
  );
}

export default App;
