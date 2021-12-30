import React from 'react';
import { connect } from 'react-redux';
import { fetchAssociations } from '../redux/associations';

class AssociationTable extends React.Component {

    constructor(){
        super();
        this.state = {
            subject: '',
            filterWord: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    handleSubmit() {
        this.props.fetchAssociations(this.state.subject)
    }

    render(){

        return (
            <div>
                <ul>
                    <input
                    name="subject"
                    onChange = {this.handleChange}
                    value={this.state.subject}
                    placeholder="Subject"
                    />
                    {this.props.associations[this.state.subject]
                    ?.map(association => {
                        return (
                            <li
                            key = {`${association.item}_${association.pos}`}
                            >
                            {association.item}
                            </li>
                        )
                    })}
                </ul>
                <button id='submit' onClick = {this.handleSubmit}> find associations </button>
            </div>
        )
    }

}

const mapState = (state) => {
    return {
        associations: state.associations
    }
}

const mapDispatch = (dispatch) => {
    return {
        fetchAssociations: (subject) => dispatch(fetchAssociations(subject))
    };
};

export default connect(mapState, mapDispatch)(AssociationTable);