import React from 'react';

const cockpit = ( props ) => {
  const btnClass = 'btn';
  const classes = [];
  if (props.persons.length <= 2) {
    classes.push('red');
  }

  if (props.persons.length <= 1) {
    classes.push('bold');
  }

  return (
    <div>
      <h1>Hi, I'm a React App</h1>
      // <p className={classes.join(' ')} >This is really working!</p>
      <button
        className={btnClass}
        onClick={props.clicked} >switch name</button>
    </div>
  );
};

export default cockpit;