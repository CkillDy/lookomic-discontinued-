import { useState } from 'react';

const Notification = () => {

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      userAvatar: '',
      userName: 'João Silva',
      description: 'curtiu sua publicação',
      date: '2 minutos'
    },
    {
      id: 2,
      userAvatar: '',
      userName: 'Maria Souza',
      description: 'comentou em sua publicação',
      date: '1 semana'
    },
    {
      id: 3,
      userAvatar: '',
      userName: 'Pedro Rodrigues',
      description: 'começou a te seguir',
      date: '2 meses'
    },
  ]);

  return (
    <div className="notifications">
      <h2>Notificações</h2>
      {notifications.length === 0 && (
        <p>Nenhuma notificação</p>
      )}
      {notifications.map(notification => (
        <NotificationItem
          key={notification.id}
          notification={notification}
        />
      ))}
    </div>
  );
}

const NotificationItem = ({ notification }) => (
  <div className="notification">
    <div className='content-notify'>
      <img
        src={notification.userAvatar}
        alt={notification.userName}
      />
      <p>
        <b>{notification.userName}</b> {notification.description}
      </p>
    </div>

    <time>{notification.date}</time>
    <button>Seguir</button>
  </div>
);

export default Notification;