import React from 'react'
import Card from './Card'

const MenuCard = ({menuData}) => {
  return (
    <section className="main-card--cointainer">
      {
        menuData.map( (menu) =>{
            return <Card key={menu.id} menu= {menu} />
        })
      }
    </section>
  )
}

export default MenuCard
