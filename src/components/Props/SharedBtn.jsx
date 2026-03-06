
function SharedBtn({name, price, quantity}) {
  return (
    <>
        <div className="bg-amber-100 w-fit p-5 text-black text-2xl">
            <div className="underline font-bold text-center">{name}</div>
            <div>Price Per Item: {price}</div>
            <div>Quantity Selected: {quantity}</div>
            <div>Total Amount: {quantity*price}</div>
        </div>
    </>
  )
}

export default SharedBtn