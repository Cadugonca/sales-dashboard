import { AvatarsList, Header, CustomTable, CardComp } from '@/components'
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

  const mockTableData = {
    headers: ['Name', 'Email', 'Actions'],
    rows: [
      [
        <span>Name</span>,
        <span>name1@email.com</span>,
        <button>Action</button>,
      ],
      [
        <span>Name</span>,
        <span>name1@email.com</span>,
        <button>Action</button>,
      ],
      [
        <span>Name</span>,
        <span>name1@email.com</span>,
        <button>Action</button>,
      ],
    ],
  }

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
        <CardComp>
          <CustomTable
            headers={mockTableData.headers}
            rows={mockTableData.rows}
          />
        </CardComp>
      </Container>
    </>
  )
}

export default Home
