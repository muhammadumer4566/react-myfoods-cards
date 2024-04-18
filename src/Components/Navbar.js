import React from 'react'

const Navbar = ({filterItem , menuList}) => {

  return (
    <nav className="navbar">
      <div className="btn-group">
        {
          menuList.map( (list) => {

            return <button className="btn-group__item"
             onClick={ () => filterItem(list)}  key={list.id}>
            {list}</button>
          } )
        }
      </div>
    </nav>
  )
}

export default Navbar
