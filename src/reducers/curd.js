export const CREATE = "create"
export const UPDATE = "update"
export const DELETE = "delete";


const initialState = {};

export function reducers(state = initialState, action) {
  switch (action.type) {
    case CREATE:
      return {
        ...state,
        [action.taskName]: {
          taskName: action.taskName,
          finished: action.finished,
        },
      };
    case UPDATE: {
      return {
        ...state,
        [action.taskName]: {
          taskName: action.taskName,
          finished: action.finished,
        },
      };
    }
    case DELETE: {
      delete state[action.taskName]
      return {...state};
    }

    default:
      return state;
  }
}

export function createTask({taskName, finished}){
    return { type: CREATE, taskName, finished };
}

export function updateTask({ taskName, finished }) {
  return { type: UPDATE, taskName, finished };
}

export function deleteTask({ taskName, finished }) {
  return { type: DELETE, taskName, finished };
}
