import styled from 'styled-components'

const RegistrationArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #6658dd;
`

const RegistrationImage = styled.div`
  background-image: url(/login-image.svg);
  background-size: cover;
  width: 50vw;
  height: 100vh;
`

function Registration() {
  return (
    <>
      <RegistrationArea> Registration </RegistrationArea>
      <RegistrationImage />
    </>
  )
}

export default Registration
