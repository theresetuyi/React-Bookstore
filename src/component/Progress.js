import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';

const Stat = ({ percent = 0 }) => (
  <div className="progress-stat">
    <p className="percent-complete">{`${percent}%`}</p>
    <p className="completed">Completed</p>
  </div>
);

Stat.propTypes = {
  percent: PropTypes.string.isRequired,
};

const Progress = ({ progress }) => {
  if (!progress) {
    // Handle the case when progress is undefined
    return null; // or render an alternative component or message
  }

  const { completed = '', currentChapter = '' } = progress;

  return (
    <div className="progress-container">
      <div className="circular-progress-container">
        <div className="circular-progress" />
      </div>
      <Stat percent={completed} />
      <div className="progress-divider" />
      <div className="current-chapter-container">
        <div>
          <p className="current-chapter-label">CURRENT CHAPTER</p>
          <p className="current-chapter">{currentChapter}</p>
        </div>
        <div>
          <button className="primary-button" type="button">
            UPDATE PROGRESS
          </button>
        </div>
      </div>
    </div>
  );
};

Progress.propTypes = {
  progress: PropTypes.shape({
    currentChapter: PropTypes.string.isRequired,
    completed: PropTypes.string.isRequired,
  }),
};

Progress.defaultProps = {
  progress: undefined, // Provide a default value for the progress prop
};

export default Progress;
