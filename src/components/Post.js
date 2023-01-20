import { ArrowDownwardOutlined, ArrowUpwardOutlined, ChatBubbleOutlineOutlined, MoreHorizOutlined, RepeatOutlined, ShareOutlined } from '@mui/icons-material'
import { Avatar, Button } from '@mui/material'
import React, { useState } from 'react'
import './Post.css'
import img from './img.jpg';
import Modal from 'react-modal'


export default function Post({id, question, timestamp, quoraUser}) {

    const[openModal, setOpenModal]= useState(false)

  return (
    <div className='post'>
        <div className='post__info'>
            <Avatar
             />
          <h5>UserName</h5> 
            <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>

        </div>
        <div className='post__body'>
            <div className='post__question'>
                <p></p>
                <Button className='post__btnAnswer' onClick={() => setOpenModal(true)}>Answer</Button>
            </div>
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
           <div className="modal__question">
              <h1>{question}</h1>
              <p>
                asked by{" "}
                <span className="name">
                  
                </span>{" "}
                {""}
                on{" "}
                <span className="name">
                  {new Date(timestamp?.toDate()).toLocaleString()}
                </span>
              </p>
            </div>
            <div className="modal__answer">
              <textarea
                
                placeholder="Enter Your Answer"
                type="text"
              />
            </div>
            <div className="modal__button">
              <button className="cancle" onClick={() => setOpenModal(false)}>
                Cancel
              </button>
              <button type="sumbit" className="add">
                Add Answer
              </button>
            </div>
          </Modal>


            <div className='post__answer'>
                <p></p>
            </div>
            <img src={img} 
             alt='' />
        </div>
        <div className='post__footer'>
            <div className='post__footerAction'>
                <ArrowUpwardOutlined />
                <ArrowDownwardOutlined />
            </div>
            <RepeatOutlined />
            <ChatBubbleOutlineOutlined />
            <div className='post__footerLeft'>
                <ShareOutlined />
                <MoreHorizOutlined />
            </div>
        </div>
      
    </div>
  )
}
