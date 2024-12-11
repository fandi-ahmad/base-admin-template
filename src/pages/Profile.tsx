import { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import { Container, Main } from '@/components/BaseLayout'
import Navbar from '@/components/Navbar'
import { InputColumn } from '@/components/Inputs/InputColumn'
import { ButtonPrimary } from '@/components/Buttons'

const Profile = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case 'username': setUsername(value); break;
      case 'password': setPassword(value); break;
      case 'new_password': setNewPassword(value); break;
      default: break;
    }
  };


  return (
    <>
      <Sidebar/>
      <Main>
        <Navbar page='profil' />

        <Container>
          <div className='w-full p-6 rounded-lg bg-white'>
            <div className='w-fit'>

              <h6>Username</h6>
              <div className='flex flex-row'>
                <InputColumn idError='usernameError' text='Username' name='username' value={username} onChange={handleInput} className='mt-1 mr-6' />
                <ButtonPrimary text='perbarui username' />
              </div>

              <h6 className='mt-6'>Perbarui Password</h6>
              <div className='flex flex-row items-center'>
                <InputColumn idError='passwordError' text='Password lama' name='password' value={password} onChange={handleInput} className='mt-1 mr-6' />
                <ButtonPrimary text='perbarui password' className='opacity-0 hover:opacity-0 cursor-default' />
              </div>

              <div className='flex flex-row items-center'>
                <InputColumn idError='newPasswordError' text='Password baru' name='new_password' value={newPassword} onChange={handleInput} type='password' className='mt-1 mr-6' />
                <ButtonPrimary text='perbarui password' />
              </div>

            </div>
          </div>

        </Container>
      </Main>

    </>
  )
}

export default Profile