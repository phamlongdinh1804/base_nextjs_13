import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

export function getTimeNowVN() {
  return new Date().toLocaleString('en-US', { timeZone: 'Asia/Ho_Chi_Minh' })
}
