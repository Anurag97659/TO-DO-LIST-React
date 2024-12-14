import React from 'react'
import '../css/Header.css'
function Header(props) {
  return (
    <>
      <h1 id='navh1'>{props.title}</h1>
    </>
  )
}

export default Header
