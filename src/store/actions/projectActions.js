export const createProject = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // TODO make async call to database
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Hritik',
            authorLastName: 'Harbhla',
            authorId: 0,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: "CREATE_PROJECT", project });
        }).catch((err) => {
            dispatch({ type: "CREATE_PROJECT_ERROR", err });
        })
        
    }
};