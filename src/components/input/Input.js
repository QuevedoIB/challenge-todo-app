import React from 'react'

export default function Input({ name, changeCallback, placeholder, value }) {
  return (
    <input name={name} value={value} placeholder={placeholder} onChange={(e) => changeCallback(e)}></input>
  )
}
