import React from 'react';

function Button({ title, handler }) {
  return (
    <div
      role="button"
      tabIndex={0} // for lint
      onClick={handler}
      onKeyDown={handler}
      className="button"
      style={{
        margin: '0 0.5vw',
        backgroundColor: `${(() => {
          if (title === 'Reject') {
            return 'orangered';
          }
          if (title === 'Cancel' || title === '+ Add attribute' || title === 'OK') {
            return 'bisque';
          }
          return 'mediumseagreen';
        })()}`,
        width: 'fit-content',
        alignSelf: 'center',
      }}
    >
      {title}
    </div>
  );
}

export default Button;
