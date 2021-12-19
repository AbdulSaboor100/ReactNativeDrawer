   
export let data = {

  
}

export function reducer(state, action) {
    switch (action.type) {
        case "ACTIVE_USER": {
            return {
                ...state,
                activeUser: action.payload
            }
        }
        case "APPLICANT_PHOTO": {
            return {
                ...state,
                applicantPic: action.payload
            }
        }
        case "CNIC_FRONT_PHOTO": {
            return {
                ...state,
                cnicFrontPic: action.payload
            }
        }
        case "CNIC_BACK_PHOTO": {
            return {
                ...state,
                cnicBackPic: action.payload
            }
        }
        case "publicApplications": {
            return {
                ...state,
                publicApplications: action.payload
            }
        }

        case "ApprovedApplication": {
            return {
                ...state,
                approvedApplication : action.payload
            }
        }
        case "STATE_CHANGES": {
            return {
                ...state,
                stateChange : action.payload
            }
        }
        case "LATITUDE": {
            console.log(action.payload)
            return {
                ...state,
                latitude : action.payload
            }
        }
        case "LONGITUDE": {
            console.log(action.payload)
            return {
                ...state,
                longitude : action.payload
            }
        }
        case "NEARESTONE": {
            return {
                ...state,
                nearestOne : action.payload
            }
        }

        default:
            return state;

    }
}
