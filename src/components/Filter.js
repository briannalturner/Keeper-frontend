import React from 'react'

class Filter extends React.Component {
    
    render() {
        return (
            <div>
                <input onChange={this.props.onChange} className="" placeholder="filter by name..."/>

            </div>
        )
    }

}

export default Filter;