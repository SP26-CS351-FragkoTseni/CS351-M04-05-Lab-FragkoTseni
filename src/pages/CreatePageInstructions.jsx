/**
 * Step-by-step instructions for adding a new page to the app.
 * Use this as a guide, then complete the exercise at the bottom.
 */

import { Link } from 'react-router-dom'

export default function CreatePageInstructions() {
  return (
    <div className="max-w-3xl mx-auto prose prose-ocu-navy">
      <h1 className="text-2xl font-bold text-ocu-navy mb-2 border-b-2 border-ocu-columbia pb-2">
        How to Create a New Page
      </h1>
      <p className="text-ocu-navy/80 mb-6">
        Follow these steps to add a new page to the app. Then create one page on your own.
      </p>

      <ol className="list-decimal list-inside space-y-6 text-ocu-navy/90">
        <li>
          <span className="font-semibold text-ocu-navy">Create the page component.</span>
          <p className="ml-6 mt-1 text-sm">
            In <code className="bg-ocu-columbia/20 px-1 rounded">src/pages/</code>, create a new file
            (e.g. <code className="bg-ocu-columbia/20 px-1 rounded">MyPage.jsx</code>). Export a default
            React component that returns JSX.
          </p>
          <pre className="ml-6 mt-2 p-3 bg-ocu-navy/10 rounded text-sm overflow-x-auto">
{`export default function MyPage() {
  return (
    <div>
      <h1>My Page</h1>
      <p>Content here.</p>
    </div>
  )
}`}
          </pre>
        </li>

        <li>
          <span className="font-semibold text-ocu-navy">Import the page in App.jsx.</span>
          <p className="ml-6 mt-1 text-sm">
            At the top of <code className="bg-ocu-columbia/20 px-1 rounded">src/App.jsx</code>, add an
            import for your new component.
          </p>
          <pre className="ml-6 mt-2 p-3 bg-ocu-navy/10 rounded text-sm overflow-x-auto">
{`import MyPage from './pages/MyPage'`}
          </pre>
        </li>

        <li>
          <span className="font-semibold text-ocu-navy">Add a route.</span>
          <p className="ml-6 mt-1 text-sm">
            Inside the <code className="bg-ocu-columbia/20 px-1 rounded">&lt;Routes&gt;</code> in
            App.jsx, add a <code className="bg-ocu-columbia/20 px-1 rounded">Route</code> with a path
            and your component.
          </p>
          <pre className="ml-6 mt-2 p-3 bg-ocu-navy/10 rounded text-sm overflow-x-auto">
{`<Route path="/my-page" element={<MyPage />} />`}
          </pre>
        </li>

        <li>
          <span className="font-semibold text-ocu-navy">Add a nav link.</span>
          <p className="ml-6 mt-1 text-sm">
            In the <code className="bg-ocu-columbia/20 px-1 rounded">&lt;nav&gt;</code> in App.jsx,
            add a <code className="bg-ocu-columbia/20 px-1 rounded">Link</code> so users can reach
            the new page from the navbar.
          </p>
          <pre className="ml-6 mt-2 p-3 bg-ocu-navy/10 rounded text-sm overflow-x-auto">
{`<Link to="/my-page" className="hover:text-ocu-columbia transition-colors">My Page</Link>`}
          </pre>
        </li>

        <li>
          <span className="font-semibold text-ocu-navy">Check that it works.</span>
          <p className="ml-6 mt-1 text-sm">
            Run <code className="bg-ocu-columbia/20 px-1 rounded">npm run dev</code>, click the new
            link in the nav, and confirm the page loads at the URL you chose (e.g. /my-page).
          </p>
        </li>
      </ol>

      <div className="mt-10 p-6 bg-ocu-columbia/15 border-2 border-ocu-columbia rounded-lg">
        <h2 className="text-lg font-bold text-ocu-navy mb-2">Your turn</h2>
        <p className="text-ocu-navy/90 mb-2">
          Using the steps above, create a <strong>new page on your own</strong>. For example:
        </p>
        <ul className="list-disc list-inside text-ocu-navy/90 space-y-1 mb-4">
          <li>An “About” or “About Me” page</li>
          <li>A “Projects” or “Portfolio” page</li>
          <li>A “Contact” page with a form or links</li>
          <li>Any other page you want in this app</li>
        </ul>
        <p className="text-ocu-navy/90 text-sm">
          Create the component in <code className="bg-ocu-columbia/20 px-1 rounded">src/pages/</code>,
          add the import, route, and nav link in App.jsx, then add your own content and styling.
        </p>
      </div>

      <p className="mt-6">
        <Link to="/" className="text-ocu-columbia hover:underline">← Back to Home</Link>
      </p>
    </div>
  )
}
