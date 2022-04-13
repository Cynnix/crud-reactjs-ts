export default (state, action) => {
    switch (action.type) {
        case 'REMOVE_USER':
            return {
                ...state,
                users: state.users.filter(employee => user.id !== action.payload)
            };
        case 'ADD_USER':
            return {
                ...state,
                users: [...state.users, action.payload]
            };
        case 'EDIT_USER':
            const UPDATED_USER = action.payload;

            const UPDATED_USERS = state.users.map(user => {
                if (user.id === UPDATED_USER.id) {
                    return UPDATED_USER;
                }
                return user;
            });

            return {
                ...state,
                users: UPDATED_USERS
            };
        default: return state;
    }
}