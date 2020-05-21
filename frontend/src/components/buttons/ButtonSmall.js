import React from 'react';

function ButtonSmall({ title, color = 'is-warning', handler }) {
  return (
    <button
      type="button"
      className={`button is-small is-rounded ${color}`}
      style={{ marginTop: '10px', position: 'inherit' }}
      onClick={event => handler(event)}
    >
      {title}
    </button>
  );
}

export default ButtonSmall;
