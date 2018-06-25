import React from "react";

class MovieSearch extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {searchKey: ""};
    }


    handleChange = (event) => {
        this.setState({
            searchKey: event.target.value
        });

        this.props.onChange(event.target.value)
    };

    render = () => {

        return (
            <div>
                <input
                    type="text"
                    value={this.state.key}
                    placeholder="Enter search term"
                    className="form-control"
                    ref="search"
                    onChange={this.handleChange}/>
                {this.props.error && <div className="alert alert-danger">{this.props.error}</div>}
            </div>
        )
    }
}

export default MovieSearch;