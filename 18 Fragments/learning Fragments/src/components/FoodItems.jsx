import Item from "./Item";




function FootItems({ items }) {

  return(
  <ul className="list-group">
    {items.map((item) => (
        <Item key={item} foodItem={item}></Item>
    ))}
  </ul>
  );
}
 export default FootItems;

//  <li key={item} className="list-group-item">
//  {item}
// </li>
