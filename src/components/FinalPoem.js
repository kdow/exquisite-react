import React from 'react';
import PropTypes from 'prop-types';
import './FinalPoem.css';

const FinalPoem = (props) => {
  const poem = props.submissions.map((line, i) => {
    return (
      <p key={i}> {line} </p>
    )
  });

  const displayPoem = props.complete

  return (
    <div className="FinalPoem">
      {
        displayPoem && (
          <section className="FinalPoem__poem">
          <h3>Final Poem</h3>
          <div>{poem}</div>
        </section>
        )
      }
      {
        !displayPoem && (
          <div className="FinalPoem__reveal-btn-container">
          <input
            type="button"
            value="We are finished: Reveal the Poem"
            className="FinalPoem__reveal-btn"
            onClick={props.onDisplayPoem}
          />
          </div>
        )

      }

    </div>
  );
 }
 
 FinalPoem.propTypes = {
  onDisplayPoem: PropTypes.func,
  submissions: PropTypes.array,
  complete: PropTypes.bool
 };

export default FinalPoem;
