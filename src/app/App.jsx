import React, { useState } from "react";
import "./App.scss";

import avatarMarkWebber from "../assets/avatar-mark-webber.webp";
import avatarAngelaGray from "../assets/avatar-angela-gray.webp";
import avatarJacobThompson from "../assets/avatar-jacob-thompson.webp";
import avatarRizkyHasanuddin from "../assets/avatar-rizky-hasanuddin.webp";
import avatarKimberlySmith from "../assets/avatar-kimberly-smith.webp";
import avatarNathanPeterson from "../assets/avatar-nathan-peterson.webp";
import avatarAnnaKim from "../assets/avatar-anna-kim.webp";

import Header from "../components/Header/Header";
import Notification from "../components/Notification/Notification";

const App = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      hide: false,
      avatar: avatarMarkWebber,
      name: "Mark Webber",
      action: "reacted to your recent post",
      content: "My first tournament today!",
      time: "1m ago",
      private: false,
      privateMessage: "",
      hasPost: false,
    },
    {
      id: 2,
      hide: false,
      avatar: avatarAngelaGray,
      name: "Angela Gray",
      action: "followed you",
      content: "",
      time: "5m ago",
      private: false,
      privateMessage: "",
      hasPost: false,
    },
    {
      id: 3,
      hide: false,
      avatar: avatarJacobThompson,
      name: "Jacob Thompson",
      action: "has joined your group",
      content: "Chess Club",
      time: "1 day ago",
      private: false,
      privateMessage: "",
      hasPost: false,
    },
    {
      id: 4,
      hide: true,
      avatar: avatarRizkyHasanuddin,
      name: "Rizky Hasanuddin",
      action: "sent you a private message",
      content: "",
      time: "5 days ago",
      private: true,
      privateMessage:
        "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
      hasPost: false,
    },
    {
      id: 5,
      hide: true,
      avatar: avatarKimberlySmith,
      name: "Kimberly Smith",
      action: "commented on your picture",
      content: "",
      time: "1 week ago",
      private: false,
      privateMessage: "",
      hasPost: true,
    },
    {
      id: 6,
      hide: true,
      avatar: avatarNathanPeterson,
      name: "Nathan Peterson",
      action: "reacted to your recent post",
      content: "5 end-game strategies to increase you win rate",
      time: "2 weeks ago",
      private: false,
      privateMessage: "",
      hasPost: false,
    },
    {
      id: 7,
      hide: true,
      avatar: avatarAnnaKim,
      name: "Anna Kim",
      action: "left the group",
      content: "Chess Club",
      time: "2 weeks ago",
      private: false,
      privateMessage: "",
      hasPost: false,
    },
  ]);

  return (
    <div className="app">
      <div className="notifications">
        {/* Header */}
        <header>
          <Header
            notifications={notifications}
            setNotifications={setNotifications}
          />
        </header>
        {/* Notifications */}
        <main>
          <Notification
            notifications={notifications}
            setNotifications={setNotifications}
          />
        </main>
      </div>
    </div>
  );
};

export default App;
