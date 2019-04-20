import React, {Component} from 'react';
import Map from "./map";

class MapListener extends Component {
    state = {
        displayMap: false
    };

    mapKey = (e) => {
        if (e.keyCode === 77) {
            this.setState({displayMap: !this.state.displayMap})
        }
    };

    closeMap = () => {
        this.setState({displayMap: false})
    };

    render() {
        return (
            <div>
                {window.addEventListener('keydown', this.mapKey)}
                <Map displayMap={this.state.displayMap} closeMap={this.closeMap}/>
            </div>
        )
    }
}

export default MapListener;