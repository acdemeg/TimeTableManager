import React from 'react';

function ButtonRemove({ handler, orderId }) {
  return (
    <button
      type="button"
      className="button is-small is-rounded is-warning"
      style={{ marginTop: '10px', position: 'inherit' }}
      onClick={event => handler(event, orderId)}
    >
      remove order
    </button>
  );
}

export default ButtonRemove;
