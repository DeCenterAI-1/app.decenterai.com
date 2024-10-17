import React, { useState, useEffect } from 'react'

const ToggleSwitch = ({ initialState }: { initialState: boolean }) => {
  const [isOn, setIsOn] = useState(initialState)

  useEffect(() => {
    setIsOn(initialState)
  }, [initialState])

  const toggleSwitch = () => {
    setIsOn(!isOn)
  }

  return (
    <>
      <div
        className={`w-14 h-6 flex items-center bg-primary_11 rounded-full p-1 cursor-pointer transition-colors ${
          isOn ? 'bg-primary_9' : 'bg-primary_12'
        }`}
        onClick={toggleSwitch}>
        <div
          className={`w-5 h-5 rounded-full shadow-md transform transition-transform ${
            isOn ? 'translate-x-6 bg-primary_6' : 'translate-x-0 bg-primary_9'
          }`}></div>
      </div>
    </>
  )
}

export default ToggleSwitch
