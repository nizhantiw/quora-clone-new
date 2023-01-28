import { ArrowDownwardOutlined, ArrowUpwardOutlined, ChatBubbleOutlineOutlined, MoreHorizOutlined, RepeatOutlined, ShareOutlined } from '@mui/icons-material'
import { Avatar, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './Post.css'
// import img from './img.jpg';
import Modal from 'react-modal'
import { useDispatch, useSelector } from 'react-redux';
import { selectQuestionId, setQuestionInfo } from '../features/questionSlice';
import firebase from 'firebase/compat/app';
import db from '../firebase'
import { selectUser } from '../features/userSlice';


export default function Post({id, question, imgUrl, timestamp, quoraUser}) {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

    const [openModal, setOpenModal]= useState(false);
    const questionId = useSelector(selectQuestionId);
    const [answer, setAnswer]=useState('');
    const [getAnswers, setGetAnswers]= useState([]);



  useEffect(() => {
    if(questionId){
      db.collection('questions').doc(questionId).collection('answer')
      .orderBy('timestamp', 'desc').onSnapshot((snapshot) =>
      setGetAnswers(
        snapshot.doc.map((doc) =>({id:doc.id, answers:doc.data()}))
      ))
      
    }
  }, [questionId])
  
  
  
  const handleAnswer = (e) => {
    e.preventDefault();

    if (questionId) {
      db.collection("questions").doc(questionId).collection("answer").add({
        user: user,
        answer: answer,
        questionId: questionId,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }
    console.log(questionId);
    setAnswer("");
    setOpenModal(false);
  };

  return (
    <div className='post' onClick={() => 
    dispatch(setQuestionInfo({
      questionId:id,
      questionName:question,
    })
    )
    } >
        <div className='post__info'>
            <Avatar
            src={user.photo}
            
             />
          <h5>UserName</h5> 
            <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>

        </div>
        <div className='post__body'>
            <div className='post__question'>
                <p>{question}</p>
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
              <button type="sumbit" onClick={handleAnswer} className="add">
                Add Answer
              </button>
            </div>
          </Modal>


            <div className='post__answer'>
              {getAnswers.map(({id, answers}) => (
                <p key={id} style={{position:'relative', paddingBottom:'5px'}}>
                  {id === answers.questionId ? (
                    <span>
                      {answers.answer}
                      <br />
                      <span style={{position:'absolute', 
                        color:'gray',
                        fontSize:'small',
                        display:'flex',
                        right:'0px',
                        }}
                        >
                          <span style={{color: '#b92b27'}}>
                            {answers.user.displayName
                            ? answers.user.displayName
                          :answers.user.email}{" "}
                          on{" "}
                          {new Date(answers.timestamp?.toDate()).toLocaleString()}
                          </span>
                        </span>
                    </span>
                  ) : ("")}
                </p>

              ))}
                
            </div>
            <img src={imgUrl} //image inserted for post 
             alt='imgURL' />
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
