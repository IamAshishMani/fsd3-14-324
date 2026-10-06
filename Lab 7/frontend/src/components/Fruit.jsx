const products = [
    {title: 'Apple', id: 1, isFruit: true},
    {title: 'Banana', id: 2, isFruit: true},
    {title: 'Carrot', id: 3, isFruit: false},
    {title: 'Grapes', id: 4, isFruit: true},
    {title: 'Potato', id: 5, isFruit: false}
];
const ListItem = products.map((items) => {{
  <li key={items.id}>{items.title} style = {{color: items.isFruit ? 'red' : 'green'}}</li>
}});

console.log(ListItem);
const Fruit = () => {
  return (
    <div>
      <ul>
        {ListItem}
      </ul>
    </div>
  )
}

export default Fruit