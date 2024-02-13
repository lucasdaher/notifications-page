import React from "react";

import redCircle from "../../assets/icons/red-circle.svg";
import postImage from "../../assets/image-chess.webp";

import "./Notification.scss";

const Notification = ({ notifications, setNotifications }) => {
  const handleHide = (id) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id ? { ...notification, hide: true } : notification
      )
    );
  };
  return (
    <div className="notifications-container">
      {notifications.map((notification) => {
        return (
          <React.Fragment key={notification.id}>
            <div
              className="notification"
              style={{
                marginBottom: notification.private ? "0" : "0.5rem",
                cursor: notification.hide ? "default" : "pointer",
                background:
                  notification.hide === true ? "transparent" : "#F7FAFD",
              }}
              onClick={() => handleHide(notification.id)}
            >
              <div className="notification__profile">
                <img
                  src={notification.avatar}
                  alt="Profile Avatar"
                  className="notification__profile__photo"
                />
              </div>
              <div className="notification__content">
                <h2 className="notification__content__message">
                  <span className="notification__content__message__name">
                    {notification.name}
                  </span>{" "}
                  {notification.action}{" "}
                  <span className="notification__content__action">
                    {notification.content}
                  </span>
                  <img
                    src={!notification.hide ? redCircle : ""}
                    style={{
                      marginBottom: "0.125rem",
                      marginLeft: "0.38rem",
                    }}
                  />
                </h2>
                <h3 className="notification__publishTime">
                  {notification.time}
                </h3>
              </div>
              <div className="notification__post">
                {notification.hasPost ? (
                  <img
                    src={postImage}
                    alt="Post Image"
                    style={{
                      cursor: "pointer",
                      width: "2.8125rem",
                    }}
                  />
                ) : null}
              </div>
            </div>
            {notification.private ? (
              <div
                className="notification__private-message"
                style={{ marginBottom: "0.5rem" }}
              >
                <p>{notification.privateMessage}</p>
              </div>
            ) : null}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Notification;
