import React from 'react';
import './RecentSubmission.css';

const RecentSubmission = (props) => {

  const displayRecentSub = props.recentSubmission !== ''
  return (
    <div className="RecentSubmission">
      {
        displayRecentSub && (
          <div>
            <h3>The Most Recent Submission</h3>
            <p className="RecentSubmission__submission">{ props.recentSubmission }</p>
          </div>
        )
      }
    </div>
  );
}

export default RecentSubmission;
