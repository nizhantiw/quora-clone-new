import React from 'react'
import './Widget.css'
import WidgetContent from './WidgetContent';

export default function Widget() {
  return (
    <div className="widget">
      <div className="widget__header">
        <h5>Space to follow</h5>
      </div>
      <div className="widget__contents">
        <WidgetContent />
      </div>
    </div>
  );
}
