import { Main } from '@/components/BaseLayout/Main'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import { Container } from '@/components/BaseLayout/Container'
import { ContainerRow } from '@/components/BaseLayout/ContainerRow'
import { CardData } from '@/components/Cards/CardData'

const Dashboard = () => {
  return (
    <>
      <Sidebar/>
      <Main>
        <Navbar page='Dashboard' />
        <Container>
          <ContainerRow className='-mx-3'>
            <CardData text='Total File/kategori' value={10} icon='fa-file' />
            <CardData text='Siswa' value={122} icon='fa-graduation-cap' />
            <CardData text='Pengguna' value={4} icon='fa-users' />
          </ContainerRow>
        </Container>
      </Main>
    </>
  )
}

export default Dashboard