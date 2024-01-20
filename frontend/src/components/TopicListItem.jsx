import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({ title, id, onTopicClick }) => {
  return (
    <div
      type="button"
      className="topic-list__item"
      onClick={() => {
        onTopicClick(id);
      }}
    >
      <span>{title}</span>
    </div>
  );
};

export default TopicListItem;
