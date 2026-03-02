/**
 * Step-by-step instructions for adding a new page to the app.
 * Use this as a guide, then complete the exercise at the bottom.
 */

import { Link } from "react-router-dom";

export default function Portfolio() {
  return (
    <div className="max-w-3xl mx-auto prose prose-ocu-navy">
      <h1 className="text-2xl font-bold text-ocu-navy mb-2 border-b-2 border-ocu-columbia pb-2">
        Portfolio
      </h1>
      <p className="text-ocu-navy/80 mb-6">
        Here are some of the projects I have built as a Computer Science
        student. These projects demonstrate my skills in React, JavaScript, and
        problem solving.
      </p>


      {/* Project 1 */}
      <div className="p-6 border-2 border-ocu-columbia rounded-lg bg-ocu-columbia/10">
        <h2 className="text-lg font-semibold text-ocu-navy">
          Personal Portfolio Website
        </h2>
        <p className="text-sm text-ocu-navy/70 mb-2">React · React Router</p>
        <p className="text-ocu-navy/90 mb-3">
          A fully responsive personal website including multiple pages, routing,
          navigation, and custom styling. Built using modern React practices and
          component-based architecture.
        </p>
      </div>

      {/* Project 2 */}
      <div className="p-6 border-2 border-ocu-columbia rounded-leg bg-ocu-columbia/10">
        <h2 className="text-lg font-semibold text-ocu-navy">
          To-Do List Application
        </h2>
        <p className="text-sm text-ocu-navy/70 mb-2">
          React · useState · Local Storage
        </p>
        <p className="text-ocu-navy/90 mb-3">
          A task management app that allows users to add, delete, and persist
          tasks using browser local storage.
        </p>
      </div>

      {/* Project 3 */}
      <div className="p-6 border-2 border-ocu-columbia rounded-leg bg-ocu-columbia/10">
        <h2 className="text-lg font-semibold text-ocu-navy">
          C Programming Projects
        </h2>
        <p className="text-sm text-ocu-navy/70 mb-2">
          C · Problem Solving · Algorithms
        </p>
        <p className="text-ocu-navy/90 mb-3">
          Implemented mathematical functions, data processing programs, and
          logic-based exercises to strengthen low-level programming skills.
        </p>
      </div>

      <p className="mt-6">
        <Link to="/" className="text-ocu-columbia hover:underline">
          ← Back to Home
        </Link>
      </p>
    </div>
  );
}
