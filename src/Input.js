import PropTypes from "prop-types";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { guessWord } from "./actions";

function Input({ secretWord }) {
  const [currentGuess, setCurrentGuess] = React.useState("");
  const success = useSelector((state) => state.success);
  const dispatch = useDispatch();

  if (success) {
    return <div data-test="component-input" />;
  }

  return (
    <div data-test="component-input">
      <form className="form-inline">
        <input
          type="text"
          data-test="input-box"
          className="mb-2 mx-sm-3"
          placeholder="Enter guess"
          value={currentGuess}
          onChange={(e) => setCurrentGuess(e.target.value)}
        />
        <button
          data-test="submit-button"
          className="btn btn-primary mb-2"
          onClick={(evt) => {
            evt.preventDefault();
            dispatch(guessWord(currentGuess));
            // TODO: update guessed words, check the secretword
            setCurrentGuess("");
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
};

export default Input;
