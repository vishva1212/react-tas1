import React from 'react'

const Child = (props) => {
    let a=props.vishva;
    console.log(a);
  return (
    <div>
        {/* <button onClick={() => myfun(a)}>Click Me</button> */}
        <button onClick={() => a.filter(function(c){
            if(c.year < 2014){
                console.log(c.name);
            }
        })}>click Me</button>
    </div>
  )
}
export default Child