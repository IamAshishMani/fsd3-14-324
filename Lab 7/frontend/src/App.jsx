const b1={
  picUrl:"https://m.media-amazon.com/images/I/811V9+pG1JL._AC_UY218_.jpg",
  bname:"Shrimad Bhagavad Gita in Hindi",
  price:1200,
  quantity:1,
  rating:5.0
};
const b2={
  picUrl:"https://m.media-amazon.com/images/I/81oYC0kKVnL._AC_UY327_FMwebp_QL65_.jpg",
  bname:"Ramayana in Kannada",
  price:1500,
  quantity:1,
  rating:4.0
};
const b3={
  picUrl:"https://m.media-amazon.com/images/I/71xYQHubGWL._AC_UY327_FMwebp_QL65_.jpg",
  bname:"Old Testament in English",
  price:1000,
  quantity:1,
  rating:4.5
};
const b4={
  picUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6ldOumkuTsS0ZsiUU4eMhmSPE_7agh_amVfRp5Ygehw&s=10",
  bname:"New Testament in English",
  price:1000,
  quantity:1,
  rating:4.5
}; 
function Book(props) {
  const { rating, bname, price, quantity, picUrl } = props.book;
  return (
    <div className="book">
      <img src={picUrl} alt={bname} />
      <h2>{bname}</h2>
      <h3>Price: {price}</h3>
      <h4>Quantity: {quantity}</h4>
      <h6>Rating: {rating}</h6>
      <button>Buy Now</button>
    </div>
  );
}

export default function App() {
  return (
    <div className="container">
      <Book book={b1} />
      <Book book={b2} />
      <Book book={b3} />
      <Book book={b4} />
    </div>
  );
}