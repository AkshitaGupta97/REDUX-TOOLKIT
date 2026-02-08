import { useDispatch, useSelector } from "react-redux";
import { setActiveTabs } from "../redux/slice-features/searchSlice";

const Tabs = () => {
    const tabs = ['photos', 'videos'];
    const dispatch = useDispatch();

    const onButtonHandler = (elem) => {
        dispatch(setActiveTabs(elem));
        console.log(elem);
    }

    const activeTab = useSelector((state) => state.search.activeTab);

  return (
    <div className="flex gap-3 mt-2 items-center justify-center">
        {
            tabs.map((elem, idx) => {
                const isActive = activeTab === elem;
                return (
                    <button 
                        key={idx} 
                        onClick={() => onButtonHandler(elem)}
                        className={`${
                            isActive 
                                ? 'bg-blue-600 text-white font-semibold' 
                                : 'bg-gray-600 text-gray-200'
                        } px-4 py-2 rounded transition-all duration-200 cursor-pointer active:scale-95 border border-yellow-500 hover:opacity-90`}
                    >
                        {elem}
                    </button>
                )
            })
        }
    </div>
  )
}

export default Tabs


