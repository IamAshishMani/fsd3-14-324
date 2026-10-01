const b1={
  picUrl:"https://m.media-amazon.com/images/I/811V9+pG1JL._AC_UY218_.jpg",
  bname:"Dr Kent Eng",
  price:1200,
  quantity:1,
  rating:5.0
};
const b2={
  picUrl:"https://m.media-amazon.com/images/I/81AQ6tZKPiL._AC_UY218_.jpg",
  bname:"Dr Kent Hindi",
  price:1500,
  quantity:1,
  rating:4.0
};


function Book(props){
  const{ rating, bname, price, quantity, picUrl }=props.book;
  return(
    <div>
      <img src={picUrl} alt={bname} />
      <h2>welcome to the house of books</h2>
      <h3>price:{price}</h3>
      <h4>quantity:{quantity} </h4>
      <h6>Rating : {rating}</h6>
    </div>
  );
}
export default function App(){
  return (
    <>
    <div className="container">
      <Book book={b1}/>
      <h1>Hello world</h1>
      <Book book={b2}/>
    </div>
    </>
  );
}