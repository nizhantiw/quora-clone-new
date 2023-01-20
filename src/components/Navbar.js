import React, { useState } from 'react'
import './Navbar.css'
import HomeIcon from '@mui/icons-material/Home'
import FeaturedPlayListOutlinedIcon  from '@mui/icons-material/FeaturedPlayListOutlined'
import AssignmentTurnedInOutlined from '@mui/icons-material/Assessment'
import PeopleAltOutlined from '@mui/icons-material/PeopleAlt'
import NotificationsOutlined  from '@mui/icons-material/NotificationAddOutlined'
import Search from '@mui/icons-material/Search'
import Button  from '@mui/material/Button/Button'
import LanguageOutlined from '@mui/icons-material/LanguageOutlined'
import { Avatar, Input } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import db, { auth } from '../firebase'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import Modal from 'react-modal'
import { ExpandMore, Link } from '@mui/icons-material'
import firebase from 'firebase/compat/app'




export default function Navbar() {
  const user = useSelector(selectUser)
  const [openModal, setOpenModal] = useState(false)
  const [input, setInput]= useState("")
  const [inputUrl, setInputUrl]=useState("")
  const questionName= input;

  const handleQuestion=(e) =>{
    
    setOpenModal(false);

    
    if(questionName){
    db.collection('questions').add({
      questions: input,
      imageUrl: inputUrl,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: user
    })
  }
    setInput("");
    setInputUrl("");

  }

  
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
            className='avatar'
            src={user.photo} />
        </div>
        <LanguageOutlined />
        <Button onClick={() => setOpenModal(true)}>Add Question</Button>
        <Modal 
        isOpen={openModal} onRequestClose={() => setOpenModal(false)} shouldCloseOnOverlayClick={false}
        style={{
          overlay:
          {width:700,
             height:600,
              backgroundColor: 'rgba(0,0,0,0.8)', 
              zIndex:'1000',
              top:'50%', 
              left:"50%",
            marginTop:'-300px',
          marginLeft: '-350px',
        },
      }}
      >
          <div className='modal__title'>
            <h5>Add Question</h5>
            <h5>Share Link</h5>
            </div>
            <div className='modal__info'>
              <Avatar className='avatar'
              src={user.photo} />
              <p>{user.displayName ? user.displayName :
              user.email} asked </p>

              <div className='modal__scope'>
                <PeopleAltOutlined/>
                <p>Public</p>
                <ExpandMore />
              </div>
            </div>
            <div className='modal__field'>
              <Input
              required
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type='text'
              placeholder="Start your question with 'What', 'How', 'Why' etc.'"
              />
            
            <div className='modal__fieldLink'>
              <Link />
              <input 
              value={inputUrl}
              onChange={(e) => setInputUrl(e.target.value)}
              type='text'
              placeholder="Optional: include a link that gives context">
                </input>

            </div>
            </div>
            <div className='modal__buttons'>
            <button onClick={() => setOpenModal(false)} className='cancel'>Close</button>
            <button type='submit' onClick={handleQuestion}  className='add'>Add Question</button>
            </div>
            
        </Modal>
      </div>
    </div>
  )
}
