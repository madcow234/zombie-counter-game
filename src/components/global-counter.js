import React from 'react';
import {connect} from "react-redux";

const mapStateToProps = state => {
    console.log(state);
    return {totalCount: state.mainCounter.totalCount}
};

const Counter = ({totalCount}) => (
    <div>
        <h2>
            The total count is {totalCount}
        </h2>
    </div>
);

const GlobalCounter = connect(mapStateToProps) (Counter);

export default GlobalCounter;