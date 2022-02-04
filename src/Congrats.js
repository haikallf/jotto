import React from "react";

function Congrats(props) {
  return (
    <>
      {props.success ? (
        <>
          <div data-test="component-congrats">
            <span data-test="congrats-message">
              Congratulations! You guessed the word!
            </span>
          </div>
        </>
      ) : (
        <div data-test="component-congrats" />
      )}
    </>
  );
}

export default Congrats;
