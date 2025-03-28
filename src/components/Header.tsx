import styled from 'styled-components'
import { Logo } from './Logo'
import { Link } from 'react-router-dom'
import { Avatar, Box, Container } from '@mui/material'
import { pxToRem } from '@/utils'

const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.appBackground};
  border-bottom: ${pxToRem(1)} ${(props) => props.theme.appDefaultStroke};
  margin-bottom: ${pxToRem(37)};
  width: 100%;
`
function Header() {
  return (
    <StyledHeader>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: pxToRem(64),
          }}
        >
          <Link to="/home">
            <Logo width={73} height={30} />
          </Link>
          <Link to="/perfil">
            <Avatar
              alt="Dnc avatar"
              src="/dnc-avatar.svg"
              sx={{ width: pxToRem(40), height: pxToRem(40) }}
            />
          </Link>
        </Box>
      </Container>
    </StyledHeader>
  )
}

export default Header
