import { useState, useEffect } from 'react'

const API_URL = 'https://jsonplaceholder.typicode.com/posts?_limit=5'

export default function ApiDemo() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false

    async function fetchData() {
      try {
        setLoading(true)
        setError(null)
        const res = await fetch(API_URL, { method: 'GET' })
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const json = await res.json()
        if (!cancelled) setData(Array.isArray(json) ? json : [json])
      } catch (e) {
        if (!cancelled) setError(e.message)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetchData()
    return () => { cancelled = true }
  }, [])

  if (loading) {
    return (
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-ocu-navy mb-4">API Demo (GET only)</h1>
        <div className="bg-ocu-columbia/20 border border-ocu-columbia rounded-lg p-6 text-center">
          <p className="text-ocu-navy">Loading…</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-ocu-navy mb-4">API Demo (GET only)</h1>
        <div className="bg-red-100 border border-red-300 rounded-lg p-6 text-red-800">
          <p>Error: {error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-ocu-navy mb-2">API Demo (GET only)</h1>
      <p className="text-ocu-navy/70 text-sm mb-4">Data from {API_URL}</p>
      <div className="space-y-4">
        {data?.map((item) => (
          <div
            key={item.id}
            className="bg-ocu-columbia/15 border border-ocu-columbia rounded-lg p-6"
          >
            <h2 className="font-semibold text-ocu-navy mb-2">{item.title}</h2>
            <p className="text-ocu-navy/90">{item.body}</p>
            <p className="text-ocu-navy/60 text-sm mt-4">ID: {item.id}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
