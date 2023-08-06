import { dateTransform } from '../helpers/dateTransform'

export async function getPhotos(date, camera) {
  const url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos'
  console.log(camera)
  const response = await fetch(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&camera=${camera}&api_key=${process.env.API_KEY}`
  )
  const data = await response.json()
  return data
}
