import { ComponentProps, useMemo } from 'react'

import logo from '../../assets/logo.svg'
import {
  HeaderContainer,
  HeaderContent,
  Logo,
  NavContainer,
  NavItem,
} from './styles'

interface HeaderProps extends ComponentProps<'header'> {
  // Defina suas props aqui
}

export function Header({ ...props }: HeaderProps) {
  const navItems = useMemo(() => {
    return [
      {
        label: 'Sobre mim',
        href: '#sobre-mim',
      },
      {
        label: 'Skills',
        href: '#skills',
      },
      {
        label: 'Hobbies',
        href: '#hobbies',
      },
      {
        label: 'Formação ',
        href: '#formacao',
      },
      {
        label: 'Experiência',
        href: '#experiencia',
      },
      {
        label: 'Contato',
        href: '#contato',
      },
    ]
  }, [])

  return (
    <HeaderContainer {...props} id="inicio">
      <HeaderContent>
        <Logo src={logo} alt="Logotipo do vander.dev" />
        <NavContainer>
          {navItems.map((item) => (
            <NavItem key={item.href} href={item.href}>
              {item.label}
            </NavItem>
          ))}
        </NavContainer>
      </HeaderContent>
    </HeaderContainer>
  )
}
