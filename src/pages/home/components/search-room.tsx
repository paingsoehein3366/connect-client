import { useParams } from "react-router-dom"

const SearchRoom = () => {
  const { city, station } = useParams()
  console.log(city, station);

  return (
    <div>
      hello
    </div>
  )
}

export default SearchRoom
