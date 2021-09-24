import React, { Component } from 'react';


class EvenAndOdd extends React.Component {

    constructor() {
        super();
        this.state = { 
            evenArray: [],
            oddArray: [],
            userInput: ""
         }
    };
    handleChange(value) {
        this.setState({userInput: value});
    }



   


    render () {
        
        const onClick = () => {
            console.log("Clicked");
        }

        const onChange = (event) => {
            this.handleChange(event.target.value)
        }

    return (
        <div className="puzzleBox evenAndOddPB">
            <h4 value="Evens and Odds">Even and Odds</h4>
            <input  onChange={onChange}className="inputLine" ></input>
            <button onClick={onClick} className="confirmationButton">Confirm</button>
            <span className="resultsBox"></span>
            <span className="resultsBox"></span>

        </div>

  

    )
}
}

export default EvenAndOdd;