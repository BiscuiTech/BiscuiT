import { parseISO, format } from 'date-fns'

export default function DateFormater({ dateString }) {
  try {
    const date = parseISO(dateString)
    return <time dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</time>
  } catch (error) {
    console.error(error)
    return
  }
}
