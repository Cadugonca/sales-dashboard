import {
  BannerImage,
  FormComponent,
  StyledH1,
  StyledP,
  StyledUl,
  Logo,
} from '@/components'
import { Box, Container, Grid2 } from '@mui/material'
import { pxToRem } from '@/utils'

function Registration() {
  return (
    <>
      <Box>
        <Grid2 container>
          <Grid2
            size={{ xs: 12, sm: 6 }}
            sx={{ alignItems: 'center', display: 'flex', height: '100vh' }}
          >
            <Container maxWidth="sm">
              <Box sx={{ marginBottom: pxToRem(24) }}>
                <Logo height={41} width={100} />
              </Box>

              <Box sx={{ marginBottom: pxToRem(24) }}>
                <StyledH1> Cadastro </StyledH1>
                <StyledP>
                  {' '}
                  Começe seu cadastro para acessar o aplicativo{' '}
                </StyledP>
                <StyledUl>
                  <li> Cadastre-se </li>
                  <li> Confirme seu email </li>
                  <li> Acesse o aplicativo </li>
                </StyledUl>
              </Box>
              <FormComponent
                inputs={[
                  { type: 'email', placeholder: 'Email' },
                  { type: 'password', placeholder: 'Senha' },
                ]}
                buttons={[
                  {
                    className: 'primary',
                    type: 'submit',
                    children: 'Login',
                  },
                ]}
                message={{
                  msg: 'Erro',
                  type: 'error',
                }}
              />
            </Container>
          </Grid2>
          <Grid2
            size={{ xs: 12, sm: 6 }}
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            <BannerImage />
          </Grid2>
        </Grid2>
      </Box>
    </>
  )
}

export default Registration
