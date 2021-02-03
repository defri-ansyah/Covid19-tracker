const initialStateData = {
    data: [],
  }
  const dataReducer = (state = initialStateData, action) => {
    if (action.type === 'SET_DATA') {
      return {
        ...state,
        data: action.payload
      }
    } else {
      return state
    }
  }

  export default dataReducer