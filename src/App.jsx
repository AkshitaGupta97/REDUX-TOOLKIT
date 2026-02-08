import { Route, Routes } from "react-router-dom"
//import CounterProject from "./pages/CounterProject"
import HomeSearchProject from "./HomeSearchProject"
import CollectionPage from "./pages/CollectionPage"
import Navbar from "./components/Navbar"
import {ToastContainer, toast} from 'react-toastify';

const App = () => {
  return (
    <>
      <ToastContainer />

      <Navbar />
      <Routes>
        <Route path='/' element={<HomeSearchProject />} />
        <Route path='/collection' element={<CollectionPage />} />

        {/* <Route path="/counter" element={<CounterProject />} /> */}
      </Routes>
    </>
  )
}

export default App