import { useState } from "react"
import {useDispatch} from 'react-redux';
import { setQuery } from "../redux/slice-features/searchSlice";

export const SearchBar = () => {

    const [text, setText] = useState('');

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(text)

        dispatch(setQuery(text));

        setText('');

    }

  return (
    <div>
        <form onSubmit={(e) => submitHandler(e)}
            className="flex bg-gray-900 border w-full border-amber-300 rounded px-16 py-8 gap-2" >
            <input className='border-2 w-full px-4 py-2 text-lg rounded-l-lg focus:outline-none'
                required
                type="text" placeholder="Search here..." 
                value={text} onChange={(e) => setText(e.target.value)}   
            />
            <button className="active:scale-95 border border-amber-300 cursor-pointer px-8 py-2 text-lg rounded-l-lg bg-gray-600">Search</button>
        </form>
    </div>
  )
}
