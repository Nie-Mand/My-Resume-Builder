import { Linkedin, GitHub, AtSign, Phone } from 'react-feather'
import data from '../data.json'

const Socials = () => {
  return (
    <div className="grid grid-cols-4 ml-auto pt-4 justify-items-center ">
      <Social
        label={data.github.label}
        link={data.github.link}
        icon={<GitHub className="w-4" />}
      />
      <Social
        label={data.linkedin.label}
        link={data.linkedin.link}
        icon={<Linkedin className="w-4" />}
      />

      <Social
        label={data.email.label}
        link={data.email.link}
        icon={<AtSign className="w-4" />}
      />
      <Social
        label={data.phone.label}
        link={data.phone.link}
        icon={<Phone className="w-4" />}
      />
    </div>
  )
}

export default Socials

type SocialProps = {
  link: string
  label: string
  icon: JSX.Element
}
const Social = (props: SocialProps) => {
  return (
    <a
      className="flex items-center gap-2"
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.icon}
      <span className="text-xs">{props.label}</span>
    </a>
  )
}
