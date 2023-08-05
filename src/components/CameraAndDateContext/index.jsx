import { useState } from 'react'
import { CameraAndDateContext } from '../../context/CameraAndDateContext'

export function ContextProvider({ children }) {
  const [currentDateAndCamera, setCurrentDateAndCamera] = useState({
    date: new Date(),
    camera: 'Front Hazard Avoidance Camera'
  })

  return (
    <CameraAndDateContext.Provider
      value={{
        currentDateAndCamera,
        setCurrentDateAndCamera
      }}
    >
      {children}
    </CameraAndDateContext.Provider>
  )
}
