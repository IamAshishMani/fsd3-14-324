const b1 = {
  picUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-OW4no9ICxvl_ojXpOTZPByg-E6LtDpfxtJ8RdXsUUw&s=10",
  title : "Let's Use React",
  price : 1000,
  quantity :1,
  rating : 5.0
};
function Book() {
  return(
    <div>
      <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-OW4no9ICxvl_ojXpOTZPByg-E6LtDpfxtJ8RdXsUUw&s=10"/>
      <h1>Let's Use React</h1>
      <h1>Price: 1000</h1>
      <h1>Quantity: 1</h1>
      <h1>Rating 5.0</h1>
    </div>
  )
}
export default function App() {
    return (
        <div>
            <h1>Hello World</h1>
            <Book/>
            <b1/>
        </div>
    );
}