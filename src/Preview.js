import React from 'react';

//will be passed prev text and input text
export default (props) => {

  const text = props.text.split('');

  return (
    <div className="previewContent">
    {
      //map(): method creates a new array with the results
      //of calling a function for every array element.
      text.map((s,i) => {
        return <span>{s}</span>
      })
    }
    </div>
  )
}