import { useDispatch, useSelector } from 'react-redux';
import {fetchPhotos, fetchVideos} from '../api/mediaApi.js';
import {setQuery, setLoading, setError, setResults} from '../redux/slice-features/searchSlice.js'
import { useEffect } from 'react';


const ResultGrid = () => {

    const dispatch = useDispatch();
    const {query, activeTab, results, loading, error} = useSelector((store)=> store.search);

    let data;
    const getData = async() => {
      if(activeTab === 'Photos'){
        data = await fetchPhotos(query);
        console.log(data);
      }
      if(activeTab === 'Videos'){
        data = await fetchVideos(query);
      }
    }

  return (
    <div>
        <button onClick={getData}>Get data</button>
    </div>
  )
}

export default ResultGrid