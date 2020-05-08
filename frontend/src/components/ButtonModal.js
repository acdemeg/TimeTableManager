import React from 'react';

function ButtonModal({ view, handler }) {
  return (
    <button type="button" onClick={handler} className={`button is-rounded is-small ${view.style}`}>
      {' '}
      {view.title}
    </button>
  );
}

export default ButtonModal;
