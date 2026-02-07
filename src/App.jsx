import { Route, Routes } from "react-router-dom"
//import CounterProject from "./pages/CounterProject"
import HomeSearchProject from "./HomeSearchProject"

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomeSearchProject />} />

        {/* <Route path="/counter" element={<CounterProject />} /> */}
      </Routes>
    </>
  )
}

export default App