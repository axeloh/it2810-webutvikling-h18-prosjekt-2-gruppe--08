<<<<<<< HEAD
import React, {Component} from 'react';

class Tabs extends Component {

    getStyle(activeBool) {
        return activeBool === true ? {'backgroundColor': 'var(--pink)'} : {'backgroundColor': 'white'};
    }

=======
import React, { Component } from 'react';

class Tabs extends Component {

    constructor(props){
        super(props);

    }

>>>>>>> 0d84ad939528fc72f02aa3108c9d08e6667fb7fe
    render() {
        return(
            <div className="tabs_container">
                <div className="tab1" onClick={() => this.props.onTabSelect(0)}>
                    <a>Artwork 1</a>
                </div>
                <div className="tab2" onClick={() => this.props.onTabSelect(1)}>
                    <a>Artwork 2</a>
                </div>
                <div className="tab3" onClick={() => this.props.onTabSelect(2)}>
                    <a>Artwork 3</a>
                </div>
                <div className="tab4" onClick={() => this.props.onTabSelect(3)}>
                    <a>Artwork 4</a>
                </div>
            </div>
        )
    }
}

export default Tabs;
