
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


// For using the children content of button tag as prop.
// function Button({ children, onClick }) {
//   return (
//     <button onClick={onClick} style={{ padding: "10px 20px" }}>
//       {children}
//     </button>
//   );
// }