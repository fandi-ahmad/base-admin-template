import { Container, Main } from "@/components/BaseLayout"
import { CardContainer } from "@/components/Cards"
import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"

const IconPage = () => {
  return (
    <>
      <Sidebar/>
      <Main>
        <Navbar page='Icon' />
        <Container>
          <CardContainer>
            <p>For icon use class in 
              <a href="https://fontawesome.com/search?ic=free" target="_blank" className="text-blue-500 hover:underline"> font awesome</a>
            </p>
          </CardContainer>
        </Container>
      </Main>
    </>
  )
}

export default IconPage