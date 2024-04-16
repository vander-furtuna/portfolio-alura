import { ComponentProps } from 'react'

import { AboutMe } from '../../containers/AboutMe'
import { Banner } from '../../containers/Banner'
import { Contact } from '../../containers/Contact'
import { Education } from '../../containers/Education'
import { Experience } from '../../containers/Experience'
import { Footer } from '../../containers/Footer'
import { Header } from '../../containers/Header'
import { SkillsAndHobbies } from '../../containers/SkillsAndHobbies'
import { DashboardContainer } from './styles'

interface DashboardProps extends ComponentProps<'div'> {
  // Defina suas props aqui
}

export function Dashboard({ ...props }: DashboardProps) {
  return (
    <DashboardContainer {...props}>
      <Header />
      <Banner />
      <AboutMe />
      <SkillsAndHobbies />
      <Education />
      <Experience />
      <Contact />
      <Footer />
    </DashboardContainer>
  )
}
