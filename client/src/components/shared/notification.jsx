import React, { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Notification({ notifications }) {
  useEffect(() => {
    notifications.forEach((notification) => {
      toast(notification.message);
    });
  }, [notifications]);

  return <ToastContainer />;
}
