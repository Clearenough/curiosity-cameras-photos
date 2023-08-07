import { monthName } from '../constants/constants'

export function dateTransform(date, type) {
  const day = date.getDate()
  const month =
    type === 'api' ? date.getMonth() + 1 : monthName[date.getMonth()]
  const year = date.getFullYear()
  if (type === 'api') {
    return `${year}-${month}-${day}`
  }
  return `${day} ${month}, ${year}`
}
