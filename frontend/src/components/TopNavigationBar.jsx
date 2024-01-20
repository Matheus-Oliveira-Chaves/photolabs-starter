import React from "react";
import "../styles/TopNavigationBar.scss";
import FavBadge from "./FavBadge";
import TopicList from "./TopicList";

const TopNavigation = ({ topics, onLoadTopic }) => {
  const handleTopicClick = (topicId) => {
    onLoadTopic(topicId);
  };

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} onTopicClick={handleTopicClick} />
      <FavBadge className="fav-badge__count" />
    </div>
  );
};

export default TopNavigation;
