import React, {Component} from 'react';
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import {connect} from "react-redux";
import {addToMainCounter} from "../conf/redux/actions/actions";

function mapDispatchToProps(dispatch) {
    return {
        addToMainCounter: num => dispatch(addToMainCounter(num))
    }
}

class TimerInstance extends Component {
    state = {
        count: 0,
        intervalId: 0,
        intervalValue: 0
    };

    tick = () => {
        this.setState({count: this.state.count + 1});
        this.props.addToMainCounter(1);
    };

    add = () => {
        this.setState({count: this.state.count + Number.MAX_SAFE_INTEGER});
        this.props.addToMainCounter(Number.MAX_SAFE_INTEGER);
    };

    faster = () => {
        if (this.state.intervalValue === 1000) {
            clearInterval(this.state.intervalId);
            const intervalId = setInterval(this.tick, 100);
            this.setState({intervalId: intervalId, intervalValue: 100});
        }
    };

    slower = () => {
        if (this.state.intervalValue === 100) {
            clearInterval(this.state.intervalId);
            const intervalId = setInterval(this.tick, 1000);
            this.setState({intervalId: intervalId, intervalValue: 1000});
        }
    };

    start = () => {
        const intervalId = setInterval(this.tick, 1000);
        this.setState({intervalId: intervalId, intervalValue: 1000});
    };

    stop = () => {
        clearInterval(this.state.intervalId);
        this.setState({intervalId: 0, intervalValue: 0});
    };

    render() {
        return (
            <div>
                <h2>The count is {this.state.count}</h2>
                <h2>The total count is {this.totalCount}</h2>
                <ButtonToolbar>
                    <ButtonGroup>
                        <Button variant={'outline-primary'} type={'button'} onClick={this.add}>Add</Button>
                        <Button variant={'outline-primary'} type={'button'} onClick={this.faster}>Faster</Button>
                        <Button variant={'outline-primary'} type={'button'} onClick={this.slower}>Slower</Button>
                        <Button variant={'outline-primary'} type={'button'} onClick={this.start}>Start</Button>
                        <Button variant={'outline-primary'} type={'button'} onClick={this.stop}>Stop</Button>
                    </ButtonGroup>
                </ButtonToolbar>
            </div>
        )
    }
}

const Timer = connect(null, mapDispatchToProps) (TimerInstance);

export default Timer;