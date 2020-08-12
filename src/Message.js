import React from 'react';

class Message extends React.Component {
    constructor(props){
        super(props)//this.props = props
        console.log(props.message)

    }
    render(){
       
    return (
        <div>
            <div>{this.props.message}</div>
            <div>{this.props.message1}</div>
        </div>
        )

    }
}

export default Message;