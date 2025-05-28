import {
  BannerImage,
  FormComponent,
  StyledH1,
  StyledP,
  Logo,
} from '@/components'
import { Box, Container } from '@mui/material'

import Grid from '@mui/material/Grid'
import { ChangeEvent, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'
import Cookies from 'js-cookie'

// utils
import { pxToRem } from '@/utils/pxToRem'
import { jwtEDC } from '@/utils/jwtEDC'

// Hooks
import { useFormValidation } from '@/hooks/useFormValidation'
import { usePost } from '@/hooks/useAxios'

// Types
import { LoginData, LoginPostData, DecodedJwt, MessageProps } from '@/types'

function Login() {
  const navigate = useNavigate()

  const inputs = [
    { type: 'email', placeholder: 'Email' },
    { type: 'password', placeholder: 'Senha' },
  ]

  const { data, loading, error, postData } = usePost<LoginData, LoginPostData>(
    'login'
  )
  const { formValues, formValid, handleChange } = useFormValidation(inputs)
  const handleMessage = (): MessageProps => {
    if (!error) {
      return {
        msg: '',
        type: 'success',
      }
    }
    switch (error) {
      case 401:
        return {
          msg: 'Email e/ou senha inválidos',
          type: 'error',
        }
      default:
        return {
          msg: 'Erro ao conectar com o servidor, fale com o suporte',
          type: 'error',
        }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await postData({
      email: String(formValues[0]),
      password: String(formValues[1]),
    })
  }

  useEffect(() => {
    if (data?.jwt_token) {
      const decoded: DecodedJwt = jwtDecode(data?.jwt_token)
      Cookies.set('Authorization', data?.jwt_token, {
        expires: jwtEDC(decoded.exp),
        secure: true,
      })
    }
    if (Cookies.get('Authorization')) navigate('/home')
  }, [data, navigate])

  return (
    <>
      <Box>
        <Grid container>
          <Grid
            item
            xs={12}
            sm={6}
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
                inputs={inputs.map((input, index) => ({
                  type: input.type,
                  placeholder: input.placeholder,
                  value: formValues[index] || '',
                  onChange: (e: ChangeEvent<HTMLInputElement>) => {
                    handleChange(index, (e.target as HTMLInputElement).value)
                  },
                }))}
                buttons={[
                  {
                    disabled: loading || !formValid,
                    onClick: handleSubmit,
                    className: 'primary',
                    type: 'submit',
                    children: loading ? 'Carregando...' : 'Entrar',
                  },
                ]}
                message={handleMessage()}
              />
            </Container>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            <BannerImage />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Login
