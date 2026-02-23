import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <h1 className="text-3xl font-bold text-ocu-navy mb-2">
        M04–M05 Lab DEMO
      </h1>
      <p className="text-ocu-navy/80 mb-6">
        Oakland City University · oak.edu
      </p>
      <p className="text-gray-600 mb-8">
        A simple web app built with React, React Router, and Tailwind CSS,
        branded in OCU colors.
      </p>
      <Link
        to="/api-demo"
        className="inline-block bg-ocu-navy text-ocu-white px-6 py-3 rounded-lg font-medium hover:bg-ocu-navy/90 transition-colors"
      >
        Open API Demo
      </Link>
    </div>
  )
}
