const authHeader = () => {
    debugger;
    const accessToken = sessionStorage.getItem('accessToken');

    if (accessToken) {
        // for Node.js Express back-end
        return { 'accessToken': accessToken };
    } else {
        return {};
    }
}


export {
    authHeader
};
