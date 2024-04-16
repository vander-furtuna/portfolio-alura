import { ComponentProps, useMemo } from 'react'
import { BsStars } from 'react-icons/bs'
import {
  FaCode,
  FaCss3,
  FaHtml5,
  FaNodeJs,
  FaPen,
  FaReact,
} from 'react-icons/fa'
import { FaBookBookmark } from 'react-icons/fa6'
import { IoSearch } from 'react-icons/io5'
import { MdHeadset } from 'react-icons/md'
import { RiJavascriptFill } from 'react-icons/ri'
import { SiPhp } from 'react-icons/si'

import { Card } from '../../components/Card'
import { Title } from '../../components/Title'
import { CardContainer, Content, SkillsAndHobbiesContainer } from './styles'

interface SkillsAndHobbiesProps extends ComponentProps<'div'> {
  // Defina suas props aqui
}

export function SkillsAndHobbies({ ...props }: SkillsAndHobbiesProps) {
  const skills = useMemo(
    () => [
      { Icon: FaHtml5, label: 'HTML' },
      { Icon: RiJavascriptFill, label: 'JavaScript' },
      { Icon: SiPhp, label: 'PHP' },
      { Icon: FaNodeJs, label: 'Node.js' },
      { Icon: FaReact, label: 'React.js' },
      { Icon: FaCss3, label: 'CSS' },
    ],
    [],
  )

  const hobbies = useMemo(
    () => [
      { Icon: FaCode, label: 'Programar' },
      { Icon: FaBookBookmark, label: 'Ler' },
      { Icon: MdHeadset, label: 'Ouvir Música' },
      { Icon: FaPen, label: 'Escrever' },
      { Icon: BsStars, label: 'Imaginar' },
      { Icon: IoSearch, label: 'Pesquisar' },
    ],
    [],
  )

  return (
    <SkillsAndHobbiesContainer {...props}>
      <Content id="skills">
        <Title>Skills</Title>
        <CardContainer>
          {skills.map((skill) => (
            <Card key={skill.label} Icon={skill.Icon} label={skill.label} />
          ))}
        </CardContainer>
      </Content>
      <Content id="hobbies">
        <Title>Hobbies</Title>
        <CardContainer>
          {hobbies.map(({ Icon, label }) => (
            <Card key={label} Icon={Icon} label={label} />
          ))}
        </CardContainer>
      </Content>
    </SkillsAndHobbiesContainer>
  )
}
