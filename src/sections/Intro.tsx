import data from '../data.json'

const Intro = () => {
  return (
    <div className="flex items-center justify-between gap-x-4">
      <div className="w-80 ">
        <h1 className="text-3xl leading-none uppercase font-bold">
          {data.name}
        </h1>
        <h3 className="mt-2 leading-none text-lg font-medium uppercase">
          {data.title}
        </h3>
      </div>
      <p className="capitalize max-w-lg text-sm">{data.objective}</p>
    </div>
  )
}

export default Intro
