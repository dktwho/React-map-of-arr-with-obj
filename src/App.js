import './App.css';

function App() {

  const prods = [
    {name: 'product1', cost: 100},
    {name: 'product2', cost: 200},
    {name: 'product3', cost: 300},
  ];

  const result = prods.map((elem, index) => {
    return <p key={index}>
      <span>{elem.name}</span>
      <span> {elem.cost}</span>  
       </p>
  })

  const users = [
    {name: 'user1', surn: 'surn1', age: 30},
    {name: 'user2', surn: 'surn2', age: 31},
    {name: 'user3', surn: 'surn3', age: 32},
  ];

  const result22 = users.map((item, idx) => {
    return <li key={idx}>{item.name} - {item.surn} - {item.age}</li>
  })

  const prods2 = [
    {id: 1, name: 'product1', cost: 100},
    {id: 2, name: 'product2', cost: 200},
    {id: 3, name: 'product3', cost: 300},
  ];

  const result33 = prods2.map(prod => {
    return <li key={prod.id}>{prod.name} - {prod.cost}</li>
  })

  return (
    <div className="App">
      <ul>{result}</ul>
      <br />
      <br />
      <hr />
      <ul>{result22}</ul>
      <br />
      <br />
      <hr />
      <ul>{result33}</ul>

    </div>
  );
}

export default App;
