import data from '../data.json'

const Education = () => {
  return (
    <div className="pb-4">
      <h1 className="font-bold uppercase text-xl">education</h1>
      <div className="px-2">
        <span className="lowercase italic text-black/90 font-light">
          {data.education.period}
        </span>
        <h2 className="capitalize">{data.education.school}</h2>

        {data.education.description.map(bullet => (
          <p className="px-2 text-black/90 capitalize">⚈ {bullet}</p>
        ))}
      </div>
    </div>
  )
}

export default Education
