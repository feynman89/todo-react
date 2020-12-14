import React from 'react'
import block from 'bem-clsx'
import './styles.scss'

const h = block('header')

const Header: React.FC = () => (
  <div className={h()}>
    todos
  </div>)

export default Header