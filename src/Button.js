import React from 'react';

//this is a functional component
const Button = ({text, whenClicked}) =>{

    let clickedTimes = 0;

    //console.log(color);

    // const whenClicked = () => {
    //     clickedTimes += 1
    //     console.log(clickedTimes)
    // }

    return(<button onClick={whenClicked}>{text} : {clickedTimes}</button>)
    //return(<button>On/Off</button>)

}



// const Button = ({text}) => {
// return(<button>{text}</button>)
// }

// class Button extends React.Component {
  
//     render(){
       
//     return (
//         <div>
//             <button>Click</button>
//         </div>
//         )

//     }
// }

export default Button;