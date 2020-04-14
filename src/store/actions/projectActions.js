export const createProject = (project) => {
    return (dipatch, getState) => {
        // TODO async call to database
        dispatch({ type: "CREATE_PROJECT", project })
    }
}