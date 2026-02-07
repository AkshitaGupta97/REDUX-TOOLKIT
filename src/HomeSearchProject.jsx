import { fetchPhotos } from "./api/mediaApi"

const HomeSearchProject = () => {
  const getPhotos = (text) => {
     fetchPhotos(text)
  }

  return (
    <div>
      <button onClick={() => getPhotos('cat')}>Get Photos</button>
    </div>
  )
}

export default HomeSearchProject