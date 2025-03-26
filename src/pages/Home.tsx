import { AvatarsList, Header, CardComp } from '@/components'
import { Container } from '@mui/material'
import { currencyConverter } from '@/utils'

function Home() {
  const mockListData = [
    {
      name: 'Dnc',
      subtitle: currencyConverter(1000),
      avatar: '/dnc-avatar.svg',
    },
    {
      name: 'Dnc',
      subtitle: currencyConverter(2000),
      avatar: '/dnc-avatar.svg',
    },
    {
      name: 'Dnc',
      subtitle: currencyConverter(3000),
      avatar: '/dnc-avatar.svg',
    },
  ]
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <CardComp>
          <h1>Home</h1>
        </CardComp>

        <CardComp>
          <AvatarsList listData={mockListData} />
        </CardComp>
      </Container>
    </>
  )
}

export default Home
