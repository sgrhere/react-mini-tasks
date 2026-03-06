import { Link } from "react-router-dom"


function Home() {
  return (
    <> 
    <h1 className="text-center text-5xl mt-5 underline">I am the homepage and here are the list of activities.</h1>
      <ol className="pl-10 list-decimal flex flex-col items-center justify-center text-3xl pt-5 gap-5">
        <li><Link to="/export">Export Task</Link></li>
        <li><Link to="/ternary">Ternary Operator</Link></li>
        <li><Link to="/props">Props</Link></li>
        <li><Link to="/skeleton-profile">Skeleton Loader</Link></li>
        <li><Link to="/modes">Light/Dark Mode</Link></li>
        <li><Link to="/time">Clock Time</Link></li>
        <li><Link to="/tabs">Active Tab</Link></li>
      </ol>
    </>
  )
}

export default Home