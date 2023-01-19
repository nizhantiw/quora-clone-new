import React from 'react'
import './Feed.css'
import QuoraBox from './QuoraBox';
import Post from './Post';

export default function Feed() {
  return (
  <div className="feed">
    <QuoraBox />
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />
  </div>
);
}
