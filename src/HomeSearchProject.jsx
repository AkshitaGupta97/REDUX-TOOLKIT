import ResultGrid from "./components/ResultGrid"
import { SearchBar } from "./components/SearchBar"
import Tabs from "./components/Tabs"

const HomeSearchProject = () => {
  return (
    <div>
      <SearchBar />
      <Tabs />
      <ResultGrid />
    </div>
  )
}

export default HomeSearchProject