import { Link } from "react-router-dom"


function Home() {
  return (
    <> 
    <h1 className="text-center text-5xl mt-5 underline">I am the homepage and here are the list of activities.</h1>
      <ol className="pl-10 list-decimal flex items-center justify-center text-3xl pt-5">
        <li><Link to="/export">Export Task</Link></li>
      </ol>
    </>
  )
}

export default Home