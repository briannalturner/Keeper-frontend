import React from 'react'

class Filter extends React.Component {
    
    render() {
        return (
            <div>
                <input onChange={this.props.onChange} className="filter" placeholder="search users..."/>
                <br></br><br></br>
            </div>
        )
    }

}

export default Filter;