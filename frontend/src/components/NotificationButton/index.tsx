import icon from '../../assets/img/notification-button.svg';
import './styles.css'

function NotificationButton() {
  return (
    <div className="dsmeta-red-btn">
      <img src={icon} alt="Notification" />
    </div>
  );
}

export default NotificationButton;
