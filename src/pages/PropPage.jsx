import SharedBtn from "../components/Props/SharedBtn"

function PropPage() {
  return (
    <>
    <h1 className="text-4xl text-center">Welcome to the Cart Page. (Prop) </h1>
    <div className="flex flex-col justify-center items-center gap-7 mt-4">
        <SharedBtn name="Mouse" price="150" quantity="2" />
        <SharedBtn name="Keyboard" price="200" quantity="5" />
        <SharedBtn name="Earphone" price="350" quantity="2" />
    </div>
    </>
  )
}

export default PropPage