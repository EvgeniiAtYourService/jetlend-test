import React from 'react'
import { ButtonProps } from './Button.props'

const Button = ({ children, ...props }: ButtonProps): JSX.Element => (
  <button className="button" {...props}>
    {children}
  </button>
)

export default Button
