/**
 * Resume Page — Student TODO
 * --------------------------
 * 1. Replace placeholder content below with your own info.
 * 2. Add your photo: place an image in public/ (e.g. public/me.jpg) and set src below.
 * 3. Add or remove sections as needed.
 * 4. Optionally add print styles or a "Download PDF" flow.
 * 5. Finish any setup and test the /resume route.
 */

export default function Resume() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-ocu-navy mb-6 border-b-2 border-ocu-columbia pb-2">
        Resume
      </h1>

      {/* Biography — TODO: add your photo and bio */}
      <section className="mb-8 flex flex-col sm:flex-row gap-6 items-start">
        <div className="flex-shrink-0 w-36 h-36 rounded-lg overflow-hidden bg-ocu-columbia/30 border-2 border-ocu-columbia flex items-center justify-center">
          {/* Replace src with your photo, e.g. /me.jpg (place file in public/) */}
          <img
            src="/me.jpg"
            alt="Your photo"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none'
              e.target.nextElementSibling?.classList.remove('hidden')
            }}
          />
          <span className="hidden text-ocu-navy/70 text-sm text-center px-2">
            Add your photo (e.g. public/me.jpg)
          </span>
        </div>
        <div className="flex-1">
          <h2 className="text-lg font-semibold text-ocu-navy mb-2">Biography</h2>
          <p className="text-ocu-navy/90">
            Write a short paragraph about yourself: your major, interests, career goals,
            and what you bring to a team. Replace this placeholder with your own bio.
          </p>
        </div>
      </section>

      {/* Contact — TODO: add your contact info */}
      <section className="mb-6">
        <h2 className="text-lg font-semibold text-ocu-navy mb-2">Contact</h2>
        <ul className="text-ocu-navy/90 space-y-1">
          <li>Your Name</li>
          <li>email@example.com</li>
          <li>Phone (optional)</li>
          <li>LinkedIn / Portfolio (optional)</li>
        </ul>
      </section>

      {/* Education — TODO: add your education */}
      <section className="mb-6">
        <h2 className="text-lg font-semibold text-ocu-navy mb-2">Education</h2>
        <div className="space-y-3">
          <div>
            <p className="font-medium text-ocu-navy">Oakland City University</p>
            <p className="text-ocu-navy/80 text-sm">Degree, Major — Expected / Graduation Year</p>
          </div>
        </div>
      </section>

      {/* Experience — TODO: add jobs, internships */}
      <section className="mb-6">
        <h2 className="text-lg font-semibold text-ocu-navy mb-2">Experience</h2>
        <div className="space-y-4">
          <div>
            <p className="font-medium text-ocu-navy">Job or Role Title</p>
            <p className="text-ocu-columbia text-sm">Company / Organization · Date range</p>
            <ul className="list-disc list-inside text-ocu-navy/90 text-sm mt-1 space-y-1">
              <li>Bullet point describing your responsibility or achievement.</li>
              <li>Add more bullets as needed.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects — TODO: add academic or personal projects */}
      <section className="mb-6">
        <h2 className="text-lg font-semibold text-ocu-navy mb-2">Projects</h2>
        <div className="space-y-3">
          <div>
            <p className="font-medium text-ocu-navy">Project Name</p>
            <p className="text-ocu-navy/80 text-sm">Tech used · Link or repo (optional)</p>
            <p className="text-ocu-navy/90 text-sm mt-1">Brief description of the project and your role.</p>
          </div>
        </div>
      </section>

      {/* Certifications — TODO: add certs, courses, badges */}
      <section className="mb-6">
        <h2 className="text-lg font-semibold text-ocu-navy mb-2">Certifications</h2>
        <ul className="text-ocu-navy/90 space-y-1">
          <li>Certification or course name — Issuer, Year</li>
          <li>Add more as needed.</li>
        </ul>
      </section>

      {/* Activities / Involvement — TODO: clubs, volunteer, leadership */}
      <section className="mb-6">
        <h2 className="text-lg font-semibold text-ocu-navy mb-2">Activities & Involvement</h2>
        <ul className="text-ocu-navy/90 space-y-1">
          <li>Club, organization, or volunteer role — brief note</li>
        </ul>
      </section>

      {/* Awards — TODO: honors, scholarships */}
      <section className="mb-6">
        <h2 className="text-lg font-semibold text-ocu-navy mb-2">Awards & Honors</h2>
        <ul className="text-ocu-navy/90 space-y-1">
          <li>Award or scholarship name — Year</li>
        </ul>
      </section>

      {/* Skills — TODO: list your skills */}
      <section className="mb-6">
        <h2 className="text-lg font-semibold text-ocu-navy mb-2">Skills</h2>
        <p className="text-ocu-navy/90">
          e.g. JavaScript, React, Tailwind CSS, Git — add your own.
        </p>
      </section>

      {/* References — optional */}
      <section>
        <h2 className="text-lg font-semibold text-ocu-navy mb-2">References</h2>
        <p className="text-ocu-navy/80 text-sm">
          Available upon request — or list 1–2 references with title and contact.
        </p>
      </section>
    </div>
  )
}
