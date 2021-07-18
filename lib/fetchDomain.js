// prod -> prob domain (custom vercel env)
// beta -> beta domain (custom vercel env)
// other branch ->  dynamic domain (system vercel env)
// local -> local host

export default function fetchCurrentDomain() {
  if (process.env.NEXT_PUBLIC_VERCEL_ENV) {
    return `https://${process.env.NEXT_PUBLIC_CURRENT_DOMAIN || process.env.NEXT_PUBLIC_VERCEL_URL}`
  } else {
    return `http://localhost:3000`
  }
}