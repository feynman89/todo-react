import React from 'react'
import block from 'bem-cn'
import './styles.scss'

interface IProps {
  active?: boolean;
  visible?: boolean;
  onClick: () => void;
}

const cls = block('buttons-group')

const Button: React.FC<IProps> = ({ visible = true, active = false, onClick, children }) => (
  <button
    className={cls('button', { active, hide: !visible })}
    onClick={onClick}
  >
    { children }
  </button>
)

export default Button
