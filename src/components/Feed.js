import React, { useEffect, useState } from 'react'
import './Feed.css'
import QuoraBox from './QuoraBox';
import Post from './Post';
import db from '../firebase';

export default function Feed() {
  const [posts, setPosts]= useState([])

  useEffect(() => {
    db.collection('questions').orderBy('timestamp', 'desc').onSnapshot(snapshot => 
      setPosts(snapshot.docs.map((doc) => ({
        id: doc.id,
        question: doc.data(),
      }))
      ))
  }, [])
  return (
  <div className="feed">
    <QuoraBox />
    {
      posts.map(({id, question})=>(
        <Post
        key={id}
        id={id}
        image={question.imageUrl}
        question={question.question}
        timestamp={question.timestamp}
        quoraUser={question.user}
        
        />
      ))
    }
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />
  </div>
);
}
