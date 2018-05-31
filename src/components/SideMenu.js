import React, { Component } from 'react';
import { connect } from "react-redux";

import styles from '../../style/SideMenu.css';
console.log(styles)

const SideMenu = ({ onClick, selectedSources, onSelectAll, onUnselectAll, showMenu }) => {

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
                <label className={styles.menuItem} style={selectedSources[source].isSelected ? { color: sourceActiveColor } : { color: sourceNotActiveColot }}>{selectedSources[source].properties.title}
                    <input className={styles.input} type="checkbox" onChange={(e) => onClick(e, [source])} checked={selectedSources[source].isSelected} />
                    <span className={styles.checkmark}></span>
                </label>
            </li>
        ))
    }
    return (
        <div>
            <nav className={`${styles.sidemenu} ${showMenu.isVisible ? styles.visible : styles.hidden}`}>
                <div className={styles.container}>
                    <div className={styles.titleContainer}>
                        <div>
                            <img className={styles.icon} src={require('../assets/newsIcon.png')} />
                        </div>
                        <h3 className={styles.text}>
                            <a onClick={(e) => onSelectAll(e, listOfSources)} className="d-inline-block align-top">
                                All in one
                        </a>

                        </h3>
                        <button onClick={(e) => onUnselectAll(e, listOfSources)} className={styles.clearButton} data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">clear</span>
                        </button>
                    </div>
                    <ul className={styles.sourceList}>
                        {renderSourcesChecks()}
                    </ul>
                </div>
            </nav>
        </div>
    )
};



function mapStateToProps(state) {
    return {
        selectedSources: state.selectedSources,
        showMenu: state.toggleMenu
    }
}



export default connect(mapStateToProps)(SideMenu);
