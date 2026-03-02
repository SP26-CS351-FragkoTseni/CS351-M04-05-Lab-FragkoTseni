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
            src= "/biopic.jpg"
            alt="Your photo"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none'
              e.target.nextElementSibling?.classList.remove('hidden')
            }}
          />
          <span className="hidden text-ocu-navy/70 text-sm text-center px-2">
            Add your photo (biopic.jpg)
          </span>
        </div>
        <div className="flex-1">
          <h2 className="text-lg font-semibold text-ocu-navy mb-2">Biography</h2>
          <p className="text-ocu-navy/90">
            I am a Computer Science student at Oakland City University with a strong
            interest in web development and software engineering. As a student-athlete,
            I have developed discipline, leadership, and time management skills while
            balancing academics and volleyball. I am passionate about building clean,
            user-friendly web applications and continuously improving my technical skills.
          </p>
        </div>
      </section>

      {/* Contact — TODO: add your contact info */}
      <section className="mb-6">
        <h2 className="text-lg font-semibold text-ocu-navy mb-2">Contact</h2>
        <ul className="text-ocu-navy/90 space-y-1">
          <li>Fragko Tseni</li>
          <li>tsenifragko@myocu.oak.edu</li>
          <li>Oakland City, IN</li>
          <li>GitHub: github.com/fragkotseni</li>
        </ul>
      </section>

      {/* Education — TODO: add your education */}
      <section className="mb-6">
        <h2 className="text-lg font-semibold text-ocu-navy mb-2">Education</h2>
        <div className="space-y-3">
          <div>
            <p className="font-medium text-ocu-navy">Oakland City University</p>
            <p className="text-ocu-navy/80 text-sm">Bachelor of Science in Computer Science  with a Minor in Creative Technologies— Expected 2027</p>
          </div>
        </div>
      </section>

      {/* Experience — TODO: add jobs, internships */}
      <section className="mb-6">
        <h2 className="text-lg font-semibold text-ocu-navy mb-2">Experience</h2>
        <div className="space-y-4">
          <div>
            <p className="font-medium text-ocu-navy">IT Student Worker</p>
            <p className="text-ocu-columbia text-sm">
              Oakland City University · 2025 – Present
            </p>
            <ul className="list-disc list-inside text-ocu-navy/90 text-sm mt-1 space-y-1">
              <li>Provide technical support to students, faculty, and staff.</li>
              <li>Troubleshoot hardware, software, and network-related issues.</li>
              <li>Assist with system setup, maintenance, and campus technology operations.</li>
              <li>Strengthened problem-solving and real-time debugging skills.</li>
            </ul>
          </div>
          <div>
            <p className="font-medium text-ocu-navy">Desk Assistant</p>
            <p className="text-ocu-columbia text-sm">Accounting Center · 2023 – 2024</p>
            <ul className="list-disc list-inside text-ocu-navy/90 text-sm mt-1 space-y-1">
              <li>Assisted students with scheduling and front-desk operations.</li>
              <li>Maintained organized financial documents and records.</li>
              <li>Improved communication and administrative efficiency.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects — TODO: add academic or personal projects */}
      <section className="mb-6">
        <h2 className="text-lg font-semibold text-ocu-navy mb-2">Projects</h2>
        <div className="space-y-3">
          <div>
            <p className="font-medium text-ocu-navy">Personal Portfolio Website</p>
            <p className="text-ocu-navy/80 text-sm">
              React · GitHub Pages
            </p>
            <p className="text-ocu-navy/90 text-sm mt-1">
              Designed and developed a responsive personal website including
              Homepage, About, Resume, and Contact pages. Implemented clean UI
              design and component-based structure.
            </p>
          </div>

          <div>
            <p className="font-medium text-ocu-navy">To-Do List Web Application</p>
            <p className="text-ocu-navy/80 text-sm">
              React · useState · Local Storage
            </p>
            <p className="text-ocu-navy/90 text-sm mt-1">
              Built a task management app allowing users to add, delete, and
              persist tasks using local storage for data retention.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications — TODO: add certs, courses, badges */}
      <section className="mb-6">
        <h2 className="text-lg font-semibold text-ocu-navy mb-2">Certifications</h2>
        <ul className="text-ocu-navy/90 space-y-1">
          <li>Printing Certicication - 2025</li>
        </ul>
      </section>

      {/* Activities / Involvement — TODO: clubs, volunteer, leadership */}
      <section className="mb-6">
        <h2 className="text-lg font-semibold text-ocu-navy mb-2">Activities & Involvement</h2>
        <ul className="text-ocu-navy/90 space-y-1">
          <li>Athletic role - OCU volleyball team</li>
          <li>Volunteer role — Acorn Academy</li>
        </ul>
      </section>

      {/* Awards — TODO: honors, scholarships */}
      <section className="mb-6">
        <h2 className="text-lg font-semibold text-ocu-navy mb-2">Awards and Honors</h2>
        <ul className="text-ocu-navy/90 space-y-1">
          <li>Graduating with Honors - 2027</li>
          <li>Athletic Scholarship Recipient</li>
        </ul>
      </section>

      {/* Skills — TODO: list your skills */}
      <section className="mb-6">
        <h2 className="text-lg font-semibold text-ocu-navy mb-2">Skills</h2>
        <p className="text-ocu-navy/90">
          JavaScript, React, HTML, CSS, C Programming, Git, GitHub,
          Problem Solving, Teamwork, Time Management
        </p>
      </section>

      {/* References — optional */}
      <section>
        <h2 className="text-lg font-semibold text-ocu-navy mb-2">References</h2>
        <p className="text-ocu-navy/80 text-sm">
          Available upon request
        </p>
      </section>
    </div>
  )
}
