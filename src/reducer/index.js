const reducer = (state, action) => {
    let session;
    switch (action.type) {
      case 'INCREASE_COUNTER':
        session = action.payload.activeSession.toLowerCase()
        return {
          ...state,
          [session]: state[session] + 1
        }
      case 'DECREASE_COUNTER':
        session = action.payload.activeSession.toLowerCase()
        return {
            ...state,
            [session]: Math.max(0, state[session] - 1)
          }
      case 'SET_ACTIVE_SESSION':
        return {
          ...state,
          activeSession: action.payload.session
        }
      default:
        return state
    }
}

export default reducer