const initialState = {
  name: '',
  email: '',
  message: '',
  formStatus: {
    status: 'idle',
    error: '',
  },
}

const contactFormReducer = (state, action) => {
  switch (action.type) {
    case 'changeInput': {
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      }
    }
    case 'changeFormStatus': {
      return {
        ...state,
        formStatus: action.payload,
      }
    }
    case 'retryFormSubmit': {
      return {
        ...state,
        formStatus: { ...initialState.formStatus },
      }
    }
    case 'resetForm': {
      return initialState
    }
    default:
      return state
  }
}

export default contactFormReducer
export { initialState }
