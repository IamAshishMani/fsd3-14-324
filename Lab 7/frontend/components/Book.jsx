function Book(props){
  const {picUrl,bname,price,quantity,rating}=props.book;
  return(
    <div className="book">
      <img src={picUrl} alt={bname} />
      <h2>welcome to the house of books</h2>
      <h3>price:{price}</h3>
      <h4>quantity:{quantity} </h4>
      <h6>Rating : {rating}</h6>

      <button>Add to Cart</button>

    </div>
  );
}

export default Book;