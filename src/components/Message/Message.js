import React, { useEffect } from 'react';
import './Message.scss';

const Message = ({ message, onClose }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onClose();
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="message message_active">
      {message}
    </div>
  );
};

export default Message;
