import { useSelector } from "react-redux";
import ResultGrid from "./components/ResultGrid"
import { SearchBar } from "./components/SearchBar"
import Tabs from "./components/Tabs"


const HomeSearchProject = () => {
  const { query } = useSelector((store) => store.search);

  return (
    <div>

      <SearchBar />
      <Tabs />
      <ResultGrid />
      {
        query != ''? (
          <div className="text-center mt-4 text-gray-300">Showing results for: {query}</div>
        ) : (
          <div className="text-center mt-4 text-gray-300">Enter a search query to see results</div>
        )
      }
    </div>
  )
}

export default HomeSearchProject