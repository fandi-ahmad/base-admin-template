import { useRef } from 'react'
import { useGlobalState } from '@/state/state'
import { ModalHandle, ModalAlert } from '@/components/Modals/ModalAlert'
import { ListMenu } from '@/components/Sidebar/ListMenu'
import logoExample from "@/assets/vite.svg"

const Sidebar = () => {
  const [asideClass, setAsideClass] = useGlobalState('asideClass')

  const modalRef = useRef<ModalHandle>(null);
  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.open();
    }
  };

  return (
    <>
      <aside className={'sidebar max-w-60 ease-nav-brand z-10 fixed inset-y-0 my-4 ml-4 block w-full -translate-x-full flex-wrap items-center justify-between overflow-y-auto rounded-2xl border-0 p-0 antialiased transition-transform duration-200 xl:left-0 xl:translate-x-0 ps bg-white xl:bg-white ' + asideClass}>
        <div className="h-16">
          <i onClick={() => setAsideClass(asideClass === 'shadow-soft-xl' ? 'translate-x-0' : 'shadow-soft-xl')} className="absolute top-0 right-0 p-4 cursor-pointer fas fa-times text-slate-400 xl:hidden"></i>
          <a className="flex items-center px-4 py-6 m-0 text-sm whitespace-nowrap text-slate-700">
            <img src={logoExample} className="inline w-8 h-full max-w-full transition-all duration-200 ease-nav-brand max-h-8" alt="main_logo" />
            <span className="ml-2 font-semibold transition-all duration-200 ease-nav-brand">Admin Template</span>
          </a>
        </div>

        <hr className="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent" />

        <div className="items-center block w-auto max-h-screen grow basis-full">
          <ul className="flex flex-col pl-0 mb-0 pt-2">
            <ListMenu icon='fa-house' text='Dashboard' to='/' />
            <p className='ml-5 mt-3 mb-2'>Components</p>
            <hr />
            <ListMenu icon='fa-square' text='Card' to='/component/card' />
            <ListMenu icon='fa-square' text='Table' to='/component/table' />
            <ListMenu icon='fa-square' text='Icon' to='/component/icon' />
            <ListMenu icon='fa-square' text='Input' to='/component/input' />
            <ListMenu icon='fa-right-from-bracket' text='Keluar' onClick={openModal} to='' />
          </ul>

          {/* <ul className="flex flex-col pl-0 mb-0">
            <li className="relative group">
              <button className='w-full'
                onClick={(e) => {
                  const dropdown = e.currentTarget.nextElementSibling;
                  if (dropdown) {
                    dropdown.classList.toggle('hidden');
                  }
                }}
              >
                <ListMenu icon='fa-chevron-down' text='Components' to='' />
              </button>

              <ul className="flex flex-col pl-0 mb-0 pt-2 bg-slate-100 hidden">
                <ListMenu icon='fa-square' text='Card' to='/component/card' />
                <ListMenu icon='fa-square' text='Table' to='/component/table' />
                <ListMenu icon='fa-square' text='Icon' to='/component/icon' />
                <ListMenu icon='fa-square' text='Input' to='/component/input' />
              </ul>
            </li>
          </ul> */}
        </div>
      </aside>

      {/* alert logout */}
      <ModalAlert
        ref={modalRef}
        title="Log Out Confirmation"
        message="Are you sure you want to log out? This action cannot be undone."
      />

    </>
  )
}

export default Sidebar