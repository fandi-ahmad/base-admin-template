import { Container, Main } from "@/components/BaseLayout"
import { CardData, CardContainer } from "@/components/Cards"
import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"

const CardPage = () => {
  return (
    <>
      <Sidebar/>
      <Main>
        <Navbar page='Card' />
        <Container>
          <div>
            <p className="mb-3">Cards/CardData</p>
            <CardData text='Total File/kategori' value={10} icon='fa-file' />
          </div>

          <div>
            <p className="mb-3">Cards/CardContainer</p>
            <CardContainer>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto enim eius consequuntur odit. Culpa labore assumenda quam pariatur. Officia blanditiis nisi tempora ipsam? Dicta cum possimus voluptas maxime soluta dolores.</p>
            </CardContainer>
          </div>
        </Container>
      </Main>
    </>
  )
}

export default CardPage