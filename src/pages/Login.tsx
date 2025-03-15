import styled from 'styled-components'

const LoginArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #6658dd;
`

const LoginImage = styled.div`
  background-image: url(/login-image.svg);
  background-size: cover;
  width: 50vw;
  height: 100vh;
`

function Login() {
  return (
    <>
      <LoginArea> Login </LoginArea>
      <LoginImage />
    </>
  )
}

export default Login
