import React from 'react'
import './Navbar.css'
import HomeIcon from '@mui/icons-material/Home'
import FeaturedPlayListOutlinedIcon  from '@mui/icons-material/FeaturedPlayListOutlined'
import AssignmentTurnedInOutlined from '@mui/icons-material/Assessment'
import PeopleAltOutlined from '@mui/icons-material/PeopleAlt'
import NotificationsOutlined  from '@mui/icons-material/NotificationAddOutlined'
import Search from '@mui/icons-material/Search'
import Button  from '@mui/material/Button/Button'

import LanguageOutlined from '@mui/icons-material/LanguageOutlined'
// import { useSelector } from 'react-redux'
// import { selectUser } from '../features/userSlice'
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { auth } from '../firebase'
// import { auth } from '../firebase'

export default function Navbar() {
  const user = useSelector(selectUser)

  
  return (
    <div className='qHeader'>
        <div className='qHeader__logo'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/250px-Quora_logo_2015.svg.png' alt='Logo' />
        
        </div>
        <div className="qHeader__icons">
          <div className="qHeader__icon">
            <HomeIcon />
          </div>
          <div className="qHeader__icon">
            <FeaturedPlayListOutlinedIcon />
          </div>
          <div className="qHeader__icon">
            <AssignmentTurnedInOutlined />
          </div>
          <div className="qHeader__icon">
            <PeopleAltOutlined />
          </div>
          <div className="qHeader__icon">
            <NotificationsOutlined />
          </div>
        </div>
        <div className="qHeader__input">
          <Search />
          <input type="text" placeholder="Search questions" />
        </div>
        <div className="qHeader__Rem">
          <div className='qHeader__avatar'>
            <Avatar onClick={() => auth.signOut()}
            src={user.photo}/>
        </div>
        <LanguageOutlined />
        <Button>Add Question</Button>
      </div>
    </div>
  )
}
