import { useDispatch, useSelector } from "react-redux"
import CollectionCard from "../components/collectionCard"
import clearCollection from "../redux/slice-features/collectionSlice"

const CollectionPage = () => {
    const collection  = useSelector(state => state.collection.items);
    const dispatch = useDispatch();

    const clearColl =() => {
        dispatch(clearCollection())
    }
  return (
    <div className="className='flex flex-wrap gap-4 mt-4 justify-center">
        <button onClick={clearColl} className="bg-red-700 border border-amber-300 cursor-pointer text-white font-medium px-3 py-2 hover: active:scale-95 mb-4">
            Clear Collection
        </button>
        {
            collection.map((item, idx) => {
                return <div key={idx}>
                    <CollectionCard data={item} />
                </div>
            })
        }
    </div>
  )
}

export default CollectionPage