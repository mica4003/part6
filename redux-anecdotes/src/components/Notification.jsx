import { useSelector } from 'react-redux';
import React from 'react';
import { useNotification } from '../NotificationContext';

const Notification = () => {
  const [notification] = useNotification()
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
  };
  if (!notification) return null;

  return (
    <div style={style}>
      {notification}
    </div>
  );
};

export default Notification;
