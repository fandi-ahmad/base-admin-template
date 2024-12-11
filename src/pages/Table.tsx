import { Main, Container, ContainerRow } from '@/components/BaseLayout'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import { BaseTable, TableData, TableHead } from '@/components/Table'
import { BaseButton, ButtonPrimary } from '@/components/Buttons'
import { Badge } from '@/components/Badge'

const Table = () => {
  return (
    <>
      <Sidebar/>
      <Main>
        <Navbar page='Table' />
        <Container>

          <div className='flex justify-end mb-4'>
            <ButtonPrimary text='Upload file baru' icon='fa-plus' />
          </div>

          <ContainerRow className='-mx-3 relative'>
            <BaseTable className='pb-24'

              thead={
              <>
                <TableHead text='No' className='w-12' />
                <TableHead text='Perihal' />
                <TableHead text='Masuk pada' />
                <TableHead text='Sumber/dari' />
                <TableHead text='Diperbarui pada' />
                <TableHead />
                <TableHead />
              </>}

              tbody={<>
                <tr>
                  <TableData text={1} />
                  <TableData text={'dfndsk'} />
                  <TableData text={'dfndsk'} />
                  <TableData text={<Badge className='bg-red-500' text='boomb' />} />
                  <TableData text={'dfndsk'} />
                  <TableData className='w-full' />
                  <TableData text={
                    <div className='flex flex-row'>
                      <BaseButton text='Edit' className='bg-blue-400 hover:bg-blue-500 me-2'  />
                      <BaseButton text='Hapus' className='bg-red-400 hover:bg-red-500'  />
                    </div>
                  } className='w-48' />
                </tr>

                <tr>
                  <TableData className='text-end' colSpan={10} text={
                    <div className='flex justify-end'>
                      <div className='flex flex-row items-center'>
                        <BaseButton icon='fa-caret-left'  />
                        <span className='mx-2'>1/2</span>
                        <BaseButton icon='fa-caret-right'  />
                      </div>
                    </div>
                    }
                  />
                </tr>
              </>}
            />
          </ContainerRow>
        </Container>
      </Main>
    </>
  )
}

export default Table