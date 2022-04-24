import data from '../data.json'

const Skills = () => {
  return (
    <div className="pb-4">
      <h1 className="font-bold uppercase text-xl">skills</h1>
      <div className="px-2 pt-2">
        <h2 className="font-bold uppercase">⚈ Primary: </h2>

        <div className="flex flex-wrap gap-x-2 px-1">
          {data.skills.primary.map(skill => (
            <span className="font-light uppercase text-xs" key={skill}>
              {skill}
            </span>
          ))}
        </div>

        <h2 className="pt-2 font-bold uppercase">⚈ Familiar with: </h2>

        <div className="px-2  flex flex-wrap gap-x-2">
          {data.skills.familiar.map(skill => (
            <span className="font-light uppercase  text-xs" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </div>
      <hr className="mt-4" />
    </div>
  )
}

export default Skills
