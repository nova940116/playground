import React from 'react'
import './button.css'

interface MyComponentProps {
  type: 'primary' | 'secondary'
}

export const MyComponent = ({ ...props }: MyComponentProps) => {
  return (
    <div className={`storybook-button--${props.type}`}> 
      Hello World
    </div>
  )
}