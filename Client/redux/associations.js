import Axios from 'axios'

// ACTION TYPES
const GET_ASSOCIATIONS = 'SET_ASSOCIATIONS'

// ACTION CREATORS

const _setAssociations = (associations) => (
    {
        type: GET_ASSOCIATIONS,
        associations
    }
);

// THUNKS

export const fetchAssociations = (subject) => {
    return async (dispatch) => {
        try {
            const associations = await Axios.get(`/api/associations/${subject}`)
            dispatch(_setAssociations(associations.data)) 
        } catch (err) {
            console.log(err)
        }
    }
}

// reducer

export default function associationsReducer(associationsList = {}, action){
    let response;
    switch (action.type) {
        case GET_ASSOCIATIONS:
            response = action.associations.response[0];
            return {... associationsList , [response.text] : response.items}
        default:
            return associationsList;
    }
}