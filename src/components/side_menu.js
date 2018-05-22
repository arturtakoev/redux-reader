import React, { Component } from 'react';
import { connect } from "react-redux";



const SideMenu = ({ onClick, selectedSources, onSelectAll, onUnselectAll }) => {

    const sourceActiveColor = '#ff5252'
    const sourceNotActiveColot = 'rgba(0, 0, 0, 0.54)'

    const listOfSources = Object.keys(selectedSources).map(key => key)
    function renderSources() {
        return listOfSources.map((source) => (
            <li>
                <a onClick={(e) => onClick(e, [source])}>{source}</a>
            </li>
        ))
    }

    function renderSourcesChecks() {
        return listOfSources.map((source) => (
            <li>

                <label className="containerOne" style={selectedSources[source].isSelected ? { color: sourceActiveColor } : { color: sourceNotActiveColot }}>{selectedSources[source].properties.title}
                    <input type="checkbox" onChange={(e) => onClick(e, [source])} checked={selectedSources[source].isSelected} />
                    <span className="checkmark"></span>
                </label>
            </li>
        ))
    }
    return (
        <ul className="list-unstyled components">
            <div>
                <h3>
                    <a onClick={(e) => onSelectAll(e, listOfSources)}>
                        <img id="icon" src={require('../assets/newsIcon.png')} className="d-inline-block align-top" />
                        All in one
                    </a>
                    <a onClick={(e) => onUnselectAll(e, listOfSources)} id="closeicon" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </a>
                </h3>

            </div>
            {renderSourcesChecks()}
        </ul>
    )
};



function mapStateToProps(state) {
    return { selectedSources: state.selectedSources }
}



export default connect(mapStateToProps)(SideMenu);
