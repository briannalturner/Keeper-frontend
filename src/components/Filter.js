import React from 'react'

class Filter extends React.Component {
    
    render() {
        return (
            <div className="row justify-content-center">
                <div className="col-3">
                    <div className="form-group">
                        <input onChange={this.props.onChange} className="form-control filter-input" placeholder="filter by name..."/>
                    </div>
                </div>
            </div>

        )
    }

}

export default Filter;