import { Container, Main } from "@/components/BaseLayout"
import { ButtonPrimary } from "@/components/Buttons"
import { ModalAlert, ModalForm } from "@/components/Modals"
import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import { ModalHandleDTO } from "@/interface/ModalHandleDTO"
import { useRef } from "react"
import { openModal } from "@/utils"

const ModalPage = () => {
  const modalRefAlert = useRef<ModalHandleDTO>(null);
  const modalRefForm = useRef<ModalHandleDTO>(null);

  return (
    <>
      <Sidebar/>
      <Main>
        <Navbar page='Modal' />
        <Container>
          <ButtonPrimary text="Show Modal Alert" onClick={() => openModal(modalRefAlert)} />
          <div className="my-4"></div>
          <ButtonPrimary text="Show Modal Basic" onClick={() => openModal(modalRefForm)} />
        </Container>
      </Main>

      <ModalAlert ref={modalRefAlert}
        message={'this is for massage'}
      />

      <ModalForm ref={modalRefForm}>
        <p>this is for children, take more components</p>
      </ModalForm>
    </>
  )
}

export default ModalPage