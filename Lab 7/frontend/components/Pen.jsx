import Book from './Book';
const Pen = (props) => {
    const { picUrl, company, price} = props.pen;

    return (
        <div>
            <img src={picUrl} alt={company} />
            <h2>{company}</h2>
            <h3>Price: {price}</h3>
            <Book book={props.book} />
        </div>
    );
}

export default Pen;