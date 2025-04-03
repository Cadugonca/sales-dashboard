import { CardComp, StyledButton, Header } from '@/components'
import { AppThemeContext } from '@/contexts/AppThemeContext'
import { useContext } from 'react'

function Profile() {
  const themeContext = useContext(AppThemeContext)
  return (
    <>
      <Header />
      <CardComp>
        <StyledButton className="primrary" onClick={themeContext?.toggleTheme}>
          Trocar Tema {themeContext?.appTheme === 'light' ? 'Escuro' : 'Claro'}
        </StyledButton>
      </CardComp>
    </>
  )
}

export default Profile
