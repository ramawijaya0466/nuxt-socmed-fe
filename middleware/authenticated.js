export default function ({ redirect }) {
  const token = window.localStorage.getItem('access_token')
  if (!token) return redirect('/login')
}
