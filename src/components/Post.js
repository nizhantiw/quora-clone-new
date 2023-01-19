import { ArrowDownwardOutlined, ArrowUpwardOutlined, ChatBubbleOutlineOutlined, MoreHorizOutlined, RepeatOutlined, ShareOutlined } from '@mui/icons-material'
import { Avatar, Button } from '@mui/material'
import React from 'react'
import './Post.css'
import img from './img.jpg';

export default function Post() {
  return (
    <div className='post'>
        <div className='post__info'>
            <Avatar />
            <h5>Username</h5>
            <small>Timestamp</small>

        </div>
        <div className='post__body'>
            <div className='post__question'>
                <p>Question</p>
                <Button className='post__btnAnswer'>Answer</Button>
            </div>
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
