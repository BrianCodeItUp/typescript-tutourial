import React from 'react'


interface TextProps {
  color: string,
  children: string,
  isVisiable: boolean
}

const Text: React.FC<TextProps> = ({ children, color, isVisiable }) => {
  return (
    isVisiable
      ? <div style={{ color }}> {children}</div>
      : null
  )
}




const App = () => {
  return ( 
    <div>
      <Text color={'green'} isVisiable={true} >aaa</Text>
    </div>
  )
}