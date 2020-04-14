export const createProject = (project) => {
    return (dispatch, getState) => {
        // TODO make async call to database
        dispatch({ type: "CREATE_PROJECT", project });
    }
};