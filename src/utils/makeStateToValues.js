export const makeStateToValues = (oldState, state) => {
    return Object.keys(oldState).reduce((acc, cur) => {
        acc[cur] = state[cur].value;
        return acc;
    }, {});
};