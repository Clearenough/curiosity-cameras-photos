export async function getPhotos(date, camera) {
  const response = await fetch(
    `${process.env.API_URL}?earth_date=${date}&camera=${camera}&api_key=${process.env.API_KEY}`
  )
  const data = await response.json()
  return data
}
