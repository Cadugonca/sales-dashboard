import {
  BannerImage,
  FormComponent,
  StyledH1,
  StyledP,
  Logo,
} from '@/components'
import { pxToRem } from '@/utils'
import { Box, Container, Grid2 } from '@mui/material'

function Login() {
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
                <StyledH1> Login </StyledH1>
                <StyledP> Faça Login para acessar o aplicativo </StyledP>
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
                  msg: 'Sucesso',
                  type: 'success',
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

export default Login
