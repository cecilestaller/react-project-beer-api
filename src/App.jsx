
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import AllBeers from './pages/AllBeers'
import BeerDetail from './pages/BeerDetail'
import RandomBeerDetail from './pages/RandomBeerDetail'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/allbeers' element={<AllBeers />}/>
          <Route path='/details/:beerid' element={<BeerDetail />}/>
          <Route path='/randombeer' element={<RandomBeerDetail />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
