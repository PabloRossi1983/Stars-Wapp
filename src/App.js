import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './Components/Header';
import Menu from './Components/Menu';
import Menu2 from './Components/Menu2';
import Card from './Components/Card';
import MenuProvider from './Context/MenuContext';
import DarkAndLigthSide from './Components/DarkAndLigthSide';


function App() {
  return (
    <div className="App">
      <MenuProvider>
        <BrowserRouter>
         <Header />
         <DarkAndLigthSide />
          <div className='body-cont'>
            <Routes>
                <Route path="/" element={<Menu />}>
                  <Route path="/:category" element={<Menu2 />}>
                    <Route path=":name" element={<Card />} />
                  </Route>
                </Route>
            </Routes>
          </div>
        </BrowserRouter>
      </MenuProvider>
    </div>
  );
}

export default App;
