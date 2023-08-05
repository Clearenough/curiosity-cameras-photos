const monthName = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
]

export function dateTransform(date) {
  const day = date.getDate()
  const month = monthName[date.getMonth()]
  const year = date.getFullYear()
  return `${day} ${month}, ${year}`
}
