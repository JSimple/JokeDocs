// import React from 'react';
// import { connect } from 'react-redux';
// import { fetchAssociations } from '../redux/associations';

// class SingleAssociation extends React.Component {

//     constructor(props){
//         super(props);
//         this.state = {
//             innerAssociations: {}
//         }
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleSubmit(filterWord) {
//         this.props.fetchAssociations(filterWord)
//     }

//     render(){

//         return (
//             <div>
//                 <button id='submit' onClick = {() => this.handleSubmit(this.props.filterWord)}> find associations </button>
//             </div>
//         )
//     }

// }

// const mapState = (state) => {
//     return {
//         associations: state.associations
//     }
// }

// const mapDispatch = (dispatch) => {
//     return {
//         fetchAssociations: (subject) => dispatch(fetchAssociations(subject))
//     };
// };

// export default connect(mapState, mapDispatch)(SingleAssociation);