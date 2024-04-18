import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import MenuCard from './Components/MenuCard'
import Menu from './data'

const uniqueList = [
  ...new Set(
    Menu.map( (list) => {
      return list.category;
    })
  ),
  "All",
];


const App = () => {

const [menuData, setMenuData] = useState(Menu);
const [menuList, setMenuList] = useState(uniqueList);

const filterItem = (category) => {
  if (category === "All") {
    setMenuData(Menu);
    return;
  }

  const updatedList = Menu.filter((list) => {
    return list.category === category;
  });

  setMenuData(updatedList);
};
  return (
    <div>
      <Navbar filterItem =  {filterItem} menuList={menuList} />
      <MenuCard menuData = {menuData} />
    </div>
  )
}

export default App
