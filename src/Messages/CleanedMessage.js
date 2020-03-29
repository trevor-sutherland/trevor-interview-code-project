import React, { Component } from 'react';
import { Card } from "react-bootstrap";

class CleanedMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    }
    
	render(){
		let firstName;
		let roomNumber;
		const selectValue = this.props.selectValue[1];
		const guestSelected = this.props.guestSelected;
		if (guestSelected === undefined || guestSelected.firstName === undefined){
			firstName = selectValue;
			roomNumber = selectValue;
			
		} else {
			firstName = guestSelected.firstName;
			roomNumber = guestSelected.reservation.roomNumber;
		}
		return(
			<Card.Body>
		    <Card.Title>
		    {this.props.selectValue[2]}
		    </Card.Title>
		    {this.props.getGreeting()}{firstName}, your room #{roomNumber}{this.props.messages[1].beginning} {this.props.time}. {this.props.messages[1].closing}
		    </Card.Body>
		);
}
}
export default CleanedMessage;