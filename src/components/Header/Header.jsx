import React from "react";

import "./Header.scss";

const Header = ({ notifications, setNotifications }) => {
  const countUnreadNotifications = () => {
    const unreadNotifications = notifications.filter(
      (notification) => !notification.hide
    );
    return unreadNotifications.length;
  };

  const handleMarkAllAsRead = () => {
    setNotifications(
      notifications.map((notification) => ({ ...notification, hide: true }))
    );
  };

  return (
    <div className="notifications__header">
      <h1 className="notifications__title">
        Notifications{" "}
        {countUnreadNotifications() > 0 ? (
          <span
            className="notifications__title__value"
            style={{ transition: "all 0.3s" }}
          >
            {countUnreadNotifications()}
          </span>
        ) : null}
      </h1>
      <div className="notifications__button">
        <button
          type="button"
          className="notifications_button_clear"
          onClick={handleMarkAllAsRead}
        >
          Mark all as read
        </button>
      </div>
    </div>
  );
};

export default Header;
