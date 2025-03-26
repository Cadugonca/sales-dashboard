import { Header, CardComp } from '@/components'
import { Container } from '@mui/material'

function Home() {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <CardComp>
          <h1>Home</h1>
        </CardComp>
      </Container>
    </>
  )
}

export default Home
