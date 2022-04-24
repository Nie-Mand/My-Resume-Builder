import data from '../data.json'

const Experience = () => {
  return (
    <div className="pb-4">
      <h1 className="font-bold uppercase text-xl">Experience</h1>

      {data.experience.map(exp => (
        <div className="px-2 pb-4" key={exp.company}>
          {exp.period && (
            <span className="capitalize italic text-black/90 font-light">
              {exp.period}
            </span>
          )}
          <h2>
            <span className="uppercase font-bold text-base">{exp.title}</span>{' '}
            {exp.title && <span className="capitalize">{exp.company}</span>}
          </h2>
          {exp.bullets.map(bullet => (
            <p
              key={bullet}
              className="px-2 py-1 text-black/90 capitalize 
            "
            >
              ⚈ {bullet}
            </p>
          ))}

          <p
            className="px-2 py-1 text-black/90 capitalize
            "
          >
            ⚈ tags:
            {exp.stack.map(tech => (
              <span
                key={tech}
                className="inline-block font-light uppercase text-xs px-2"
              >
                {tech}
              </span>
            ))}
          </p>
        </div>
      ))}

      <hr />
    </div>
  )
}

export default Experience
