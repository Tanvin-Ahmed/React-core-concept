import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const person = {
    Name : 'Dr. Mahfuz',
    job : 'Singer'
  }
  const person1 = {
    Name : 'Tanvin Ahmed',
    jod : 'Web developer'
  }
  const products =[
    {name: 'Adobe Photo Shope', price : '99.99 $'},
    {name: 'Adobe Light Room', price : '109.99 $'},
    {name: 'Adobe PDF Reader', price : '59.99 $'},
    {name: 'Adobe Ilastrator', price : '69.99 $'}
  ];
  return (
    <div className="App" style={{backgroundColor:'gray'}}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Counter></Counter>
        <Users></Users>

        <h1 style={{border: '1px dotted tomato', padding: '1rem'}}>Name : {person.Name + ' ' + person.job}</h1>
        <h2 style={{border: '1px dotted tomato', padding: '1rem'}}>Developer : {person1.Name + ' ' + '(' + person1.jod + ')'}</h2>
        <p>My first React Paragraph</p>
        <input type="text"/>
      </header>
      <Person name = 'Tanvin'></Person>
      <Person name='Ahmed'></Person>
      <Person name = 'Touhid'></Person>

      <div className='d-flex align-items-center justify-content-center flex-wrap'>
        {
          products.map(product => <ProductDiv product={product}></ProductDiv>)
        }
      </div>
    </div>
  );
}

const Person = (props) => {
  const stylePerson = {
    margin: '10px',
    backgroundColor: 'tomato',
    padding: '1rem',
    color: 'White'
  }
  return (
    <div style = {stylePerson}>
    <h1>Name : {props.name}</h1>
    <h3>Web developer</h3>
  </div>
  )
}

const ProductDiv = (props) => {
  const {name, price} = props.product;
  return (
    <div className='bg-primary text-center text-light rounded p-4 my-5 mx-3'>
      <h2>{name}</h2>
      <h3>Price : {price}</h3>
      <button type='button' className='btn btn-dark'>Buy Now</button>
    </div>
  )
}

// for counter
const Counter = () => {
  const [count, setCount] = useState(0);// it's call hook

  return(
    <div>
      <h2>Count : {count}</h2>
      <button type="submit" onClick={ () => setCount(count + 1)}>Increase</button>
      <button type="submit" onClick={ () => {if(count > 0) setCount(count - 1)}}>Decrease</button>
      <AddCard count = {count}></AddCard>
    </div>
  )
}
const AddCard = (props) => {
  return <h1>AddCard = {props.count}</h1>
}
const Users = () => {
  const [users, setUser] = useState([]); //it's call hook
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUser(data))
  }, [])
  return(
    <div className='d-flex justify-content-center p-3 m-3 bg-primary text-light rounded'>
      <h4>Total User : {users.length}</h4>
      <br/>
      <div>
        <ol>
          {
            users.map(user => <li>{user.email}</li>)
          }
        </ol>
      </div>
    </div>
  )
}
export default App;
