import { BannerImage } from '@/components'
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
              <h1> Login </h1>
              <p> Login to access the app </p>
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
