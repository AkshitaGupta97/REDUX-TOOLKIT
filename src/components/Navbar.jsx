import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="flex justify-around gap-96  w-full items-center p-4 bg-gray-900 mb-4">
        <h1 className="text-center font-bold text-white py-4 ">Search App</h1>
       <div className="flex justify-center items-center gap-3">
         <Link to='/' className="text-center block text-blue-400 hover:text-blue-300">Search</Link>
         <Link to='/collection' className="text-center block text-blue-400 hover:text-blue-300">My Collection</Link>
       </div>
    </div>

  )
}

export default Navbar