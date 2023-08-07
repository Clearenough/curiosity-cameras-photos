import { useState } from 'react'
import { CameraAndDateContext } from '../../context/CameraAndDateContext'

export function ContextProvider({ children }) {
  const [currentDateAndCamera, setCurrentDateAndCamera] = useState({
    date: new Date(),
    camera: null
  })
  const [photos, setPhotos] = useState([])

  return (
    <CameraAndDateContext.Provider
      value={{
        currentDateAndCamera,
        setCurrentDateAndCamera,
        photos,
        setPhotos
      }}
    >
      {children}
    </CameraAndDateContext.Provider>
  )
}
