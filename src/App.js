import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import TicTacToe from './component/TicTacToe';
// import Data from './component/Data';

import Nav from './component/Nav';
import Filter from './component/Filter';
import Card from './component/Card';
// import { Spinner } from 'react-icons/sl'

import Spinner from './component/Spinner';

import { useEffect, useState } from 'react';
function App() {
  
  // const data = [
  //   {
  //     "name": "John Doe",
  //     "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  //   },
  //   {
  //     "name": "Jane Smith",
  //     "description": "Sed faucibus, felis eget sagittis malesuada, nibh turpis pharetra lorem."
  //   },
  //   {
  //     "name": "Michael Johnson",
  //     "description": "Nullam vestibulum ullamcorper turpis a iaculis. Suspendisse aliquet purus sit amet urna auctor, sed tempus mauris tempus."
  //   },
  //   {
  //     "name": "Emily Davis",
  //     "description": "Fusce eget vulputate purus, id pellentesque tellus."
  //   },
  //   {
  //     "name": "Robert Anderson",
  //     "description": "Phasellus fringilla nisi vel lorem cursus, id laoreet quam ligula sit amet odio."
  //   },
  //   {
  //     "name": "Olivia Wilson",
  //     "description": "Vivamus venenatis malesuada lobortis. Quisque consectetur erat at mi tincidunt, in volutpat urna feugiat."
  //   },
  //   {
  //     "name": "William Martinez",
  //     "description": "Ut hendrerit libero sit amet eros ullamcorper lobortis."
  //   },
  //   {
  //     "name": "Sophia Taylor",
  //     "description": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
  //   },
  //   {
  //     "name": "Joseph Thomas",
  //     "description": "Donec non placerat urna. Proin tempor risus eu nisi commodo, sit amet ullamcorper purus semper."
  //   },
  //   {
  //     "name": "Ava Hernandez",
  //     "description": "Nam sollicitudin urna ac felis ultrices, non convallis risus gravida."
  //   },
  //   {
  //     "name": "David Moore",
  //     "description": "Praesent maximus libero ac aliquam mattis."
  //   },
  //   {
  //     "name": "Mia Clark",
  //     "description": "Aliquam consectetur semper tortor, sit amet malesuada nisi dapibus vitae."
  //   },
  //   {
  //     "name": "Daniel Lewis",
  //     "description": "Maecenas quis bibendum tellus, eget posuere urna."
  //   },
  //   {
  //     "name": "Isabella Lewis",
  //     "description": "Vestibulum finibus eu urna ut luctus. Nunc venenatis vulputate odio, nec aliquam tellus scelerisque sed."
  //   },
  //   {
  //     "name": "Elijah Turner",
  //     "description": "Integer ac lorem id nunc pharetra aliquet id eu nisi."
  //   },
  //   {
  //     "name": "Charlotte Baker",
  //     "description": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
  //   },
  //   {
  //     "name": "Jackson Young",
  //     "description": "Aliquam dignissim sem a nisi iaculis, in lacinia sapien feugiat."
  //   },
  //   {
  //     "name": "Amelia Walker",
  //     "description": "Cras euismod, urna at tristique faucibus, metus nisi dapibus erat, non aliquam nisl sem eu massa."
  //   },
  //   {
  //     "name": "Benjamin Hall",
  //     "description": "Curabit"
  //   },
  // ]
  // const[newData,setnewData] = useState(data)

  // function getData(datafrom){
  //   let obj = [...data,datafrom]
  //   console.log(obj)
  //   setnewData(obj)
  // }

  // function getDeletedItemId(deletedId){
  //   console.log(deletedId)
  //   const getNewData = newData.filter((e,k) => k != deletedId)
  //   console.log(getNewData)
  //   setnewData(getNewData)
  // }


 const [filterName,setFilter] = useState('')
  // console.log(data)
  let obj = '';
  function filterCatergory(catName){
    console.log('from App.js')
    setFilter(catName)
  }

  return (
    <div className="App">
      {/* <Data item = {getData}></Data> */}
      {/* {newData.map((e,k) => <Header id = {k} name = {e.name} description = {e.description} getId = {getDeletedItemId}></Header>)} */}
      <Nav></Nav>
      <Filter item = {filterCatergory}></Filter>
      <Card filterCat = {filterName}></Card>
      
    </div>
  )
}

export default App;
