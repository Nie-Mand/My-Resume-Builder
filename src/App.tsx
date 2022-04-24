import { useState } from 'react'
import Socials from './sections/Socials'
import Intro from './sections/Intro'
import Education from './sections/Education'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Projects from './sections/Projects'

function App() {
  const [printMode, setPrintMode] = useState(false)

  return (
    <>
      {!printMode && (
        <button
          onClick={() => {
            setPrintMode(print => {
              if (!print)
                setTimeout(() => {
                  window.print()
                }, 1000)
              return !print
            })
          }}
        >
          Print
        </button>
      )}
      <div
        className={`font-gt ${
          !printMode && 'my-10 w-[8.26in] h-[11.69in] mx-auto'
        }`}
      >
        <Intro />
        <Socials />

        <div className={'grid grid-cols-2 divide-x-2 pt-4 h-full'}>
          <div className="text-xs p-3 h-full">
            <Experience />
            <Education />
          </div>

          <div className="text-xs p-3 h-full">
            <Skills />
            <Projects />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
