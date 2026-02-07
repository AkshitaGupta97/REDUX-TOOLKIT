import { fetchPhotos, fetchVideos } from "./api/mediaApi"

const HomeSearchProject = () => {
  const getPhotos = (text) => {
     fetchPhotos(text)
  }
  const getVideos = (query) => {
     fetchVideos(query)
  }
  return (
    <div>
      <button onClick={() => getPhotos('cat')}>Get Photos</button>

      <button
       onClick={() => getPhotos('cat')}>Get Videos
      </button>
    </div>
  )
}

export default HomeSearchProject