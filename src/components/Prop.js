import React, { Component } from 'react';
import styles from './Prop.module.css';
    
    
class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        };
    }
    birthday = () => {
        this.setState({age : this.state.age+1})
        console.log(this.state.age);
    }
    render() {
        const { firstName, lastName, hairColor, children} = this.props;
        return <div>
                    <h1 className={styles.btn}>{ lastName }, {firstName}</h1>
                    <p>Age: {this.state.age}</p>
                    <p>Hair Color: {hairColor}</p>
                    <p>{children}</p>
                    <button onClick={ this.birthday }>Birthday Increase Button for {firstName} {lastName}</button>
                </div>;
    }
}
    
export default PersonCard;