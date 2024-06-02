import { useState } from 'react'
import { GrLogout } from 'react-icons/gr'
import { FcSettings } from 'react-icons/fc'
import { BsFingerprint, BsFillHouseAddFill } from 'react-icons/bs'
import { GrUserAdmin } from 'react-icons/gr'
import { MdHomeWork } from 'react-icons/md'
import { AiOutlineBars } from 'react-icons/ai'
import { BsGraphUp } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'

import { Link } from 'react-router-dom'
// import useRole from '../../../hooks/useRole'
// import MenuItem from './Menu/MenuItem'
import ToggleButton from '../../Shared/Button/ToggleButton'
import useAuth from '../../../Hooks/useAuth'
import useRole from '../../../Hooks/useRole'
import MenuItem from './MenuItem/MenuItem'
import { Typography } from '@material-tailwind/react'


const Sidebar = () => {
  const { logOut } = useAuth()
  const [isActive, setActive] = useState(false)
  const [toggle, setToggle] = useState(true)
  const [role, isLoading] = useRole()
  console.log(role, isLoading)
  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive)
  }

  const toggleHandler = event => {
    setToggle(event.target.checked)
  }
  return (
    <>
      {/* Small Screen Navbar */}
      <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
        <div>
          <div className='block cursor-pointer p-4 font-bold'>
            <Link to='/'>
              <p>PicoWorker</p>
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
        >
          <AiOutlineBars className='h-5 w-5' />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && '-translate-x-full'
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className='w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-rose-100 mx-auto'>
              <Link to='/'>
              <Typography
              as="a"
              href="#"
              className="mr-1 md:mr-2 cursor-pointer py-1.5 font-bold pl-2 md:pl-6 text-xl text-[#416EF0] "
            >
          PicoWorker
            </Typography>
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className='flex flex-col justify-between flex-1 mt-6'>
            {/* Conditional toggle button here.. */}
            {role === 'host' && (
              <ToggleButton toggleHandler={toggleHandler} toggle={toggle} />
            )}

            {/*  Menu Items */}
            <nav>
              {/* Statistics */}
              <MenuItem
                label='Statistics'
                address='/dashboard'
                icon={BsGraphUp}
              />
              {/* {role === 'guest' && <GuestMenu />}
              {role === 'host' ? (
                toggle ? (
                  <HostMenu />
                ) : (
                  <GuestMenu />
                )
              ) : undefined}
              {role === 'admin' && <AdminMenu />} */}
            </nav>
          </div>
        </div>

        <div>
          <hr />

          {/* Profile Menu */}
          <MenuItem
            label='Profile'
            address='/dashboard/profile'
            icon={FcSettings}
          />

          <button
            onClick={logOut}
            className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
          >
            <GrLogout className='w-5 h-5' />

            <span className='mx-4 font-medium'>Logout</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Sidebar