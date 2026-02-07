import { useDispatch, useSelector } from "react-redux";
import { setActiveTabs } from "../redux/slice-features/searchSlice";

const Tabs = () => {
    const tabs = ['Photos', 'Videos'];
    const dispatch = useDispatch();

    const onButtonHandler = (elem) => {
        dispatch(setActiveTabs(elem));
        console.log(elem);
    }

    const activeTab = useSelector((state) => state.search.activeTab);

  return (
    <div className="flex gap-3 mt-2">
        {
            tabs.map((elem, idx) => {
                return (
                    <button key={idx} onClick={() => onButtonHandler(elem)}
                        className={`${(activeTab===elem? 'bg-blue-800' :'bg-amber-600')} transition rounded cursor-pointer active:scale-95 border px-2 border-yellow-500 bg-emerald-900 `}>
                        {elem}
                    </button>
                )
            })
        }
    </div>
  )
}

export default Tabs


