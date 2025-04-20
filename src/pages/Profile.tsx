import { CardComp, StyledButton, Header, StyledH2 } from '@/components'
import { AppThemeContext } from '@/contexts/AppThemeContext'
import { useContext } from 'react'
import Grid from '@mui/material/Grid'
import { Container } from '@mui/material'

import { logout } from '@/services'
function Profile() {
  const themeContext = useContext(AppThemeContext)
  return (
    <>
      <Header />
      <Container className="mb-2" maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <CardComp>Seus dados...</CardComp>
          </Grid>

          <Grid item xs={12} sm={6}>
            <CardComp>
              <StyledH2 className="mb-1">Definições de conta</StyledH2>
              <StyledButton
                className="primary mb-1"
                onClick={themeContext?.toggleTheme}
              >
                Trocar Tema{' '}
                {themeContext?.appTheme === 'light' ? 'Escuro' : 'Claro'}
              </StyledButton>
              <StyledButton className="alert" onClick={logout}>
                Logout
              </StyledButton>
            </CardComp>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Profile
