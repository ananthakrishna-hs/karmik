import process from 'process';

const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'

export const checkIsDev = () => {
  return isDev;
}

export function formatDate (timestamp) {
  const d = new Date(timestamp)
  const time = d.toLocaleTimeString('en-US')
  return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}