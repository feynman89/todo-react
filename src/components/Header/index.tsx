import React from 'react'
import block from 'bem-clsx'
import './styles.scss'

const h = block('header')

const Header: React.FC = () => (
  <div className={'header'}>
    todos
  </div>)

export default Header
