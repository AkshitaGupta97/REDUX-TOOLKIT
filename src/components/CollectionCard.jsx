import { useDispatch } from "react-redux";
import { removeCollection, removeToast } from "../redux/slice-features/collectionSlice";

const CollectionCard = ({data}) => {
    const dispatch = useDispatch();

    const removeFromCollection = (data) => {
       dispatch(removeCollection(data.id));
       dispatch(removeToast());
       console.log("removed")
    }

    return (
        <div className='w-64 h-72 relative border border-gray-300 rounded-lg overflow-hidden shadow-md transition-transform duration-200 hover:shadow-xl hover:scale-105 cursor-pointer group'>
            {data.type === 'Photos' ? (
                <>
                    {data.src ? (
                        <img
                            src={data.src}
                            alt={data.description}
                            className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'
                        />
                    ) : (
                        <div className='w-full h-full bg-gray-200 flex items-center justify-center'>
                            <span className='text-gray-500'>No Image Available</span>
                        </div>
                    )}
                    <div className='absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                        <h1 className='text-white font-bold text-sm line-clamp-2'>{data.title}</h1>
                    </div>
                    <div className='absolute top-2 right-2'>
                        <button onClick={() => removeFromCollection(data)}
                            className="bg-red-700 border border-amber-300 cursor-pointer text-white font-medium px-3 py-2 hover: active:scale-95">
                            Remove
                        </button>
                    </div>
                </>
            ) : (
                <>
                    <video
                        className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'
                        poster={data.thumbnail}
                        controls
                    >
                        <source src={data.src} type='video/mp4' />
                        Your browser does not support the video tag.
                    </video>
                    <div className='absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                        <h1 className='text-white font-bold text-sm line-clamp-2'>{data.title}</h1>
                        <span className='text-gray-300 text-xs'>🎥 Video</span>
                    </div>
                    <div className='absolute top-2 right-2'>
                        <button onClick={console.log("remove")}
                            className="bg-red-700 border border-amber-300 cursor-pointer text-white font-medium px-3 py-2 hover: active:scale-95">Remove</button>
                    </div>
                </>
            )}
        </div>
    )
}

export default CollectionCard