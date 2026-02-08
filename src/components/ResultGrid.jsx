import { useDispatch, useSelector } from 'react-redux';
import { fetchPhotos, fetchVideos } from '../api/mediaApi.js';
import { setLoading, setError, setResults } from '../redux/slice-features/searchSlice.js'
import { useEffect } from 'react';
import ResultCard from './ResultCard.jsx';


const ResultGrid = () => {

  const dispatch = useDispatch();
  const { query, activeTab, results, loading, error } = useSelector((store) => store.search);

  const getData = async () => {
    try {
      dispatch(setLoading());

      let data = [];

      if (activeTab === 'Photos') {
        let response = await fetchPhotos(query);
        data = response.results.map((item) => ({
          id: item.id,
          title: item.description,
          description: item.alt_description,
          height: item.height,
          width: item.width,
          src: item.urls.full,
          type: 'Photos',
          thumbnail: item.urls.thumb
        }));
        console.log("data", data);

      }
      if (activeTab === 'Videos') {
        let response = await fetchVideos(query);
        data = response.videos.map((item) => ({
          id: item.id,
          thumbnail: item.image,
          type: 'Videos',
          height: item.height,
          width: item.width,
          title: query,
          src: item.video_files[1].link
        }));
        console.log("data", data);
      }

      dispatch(setResults(data));
    } catch (error) {
      console.log("error from getData", error);
      dispatch(setError(error.message));
    }
  }

  useEffect(() => {
    getData();
  }, [query, activeTab]);

  if(error) return <div className='text-center text-red-500 mt-4'>Error: {error.message}</div>
  if(loading) return <div className='text-center text-gray-500 mt-4'>Loading...</div>
  if(results.length === 0) return <div className='text-center text-gray-500 mt-4'>No results found.</div>


  return (
    <div className='flex flex-wrap gap-4 mt-4 justify-center'>
      {
        results.map((elem, idx) => {
          return(
            <div key={idx} >
             <ResultCard data={elem} />
            </div>
          )
        })
      }
    </div>
  )
}

export default ResultGrid