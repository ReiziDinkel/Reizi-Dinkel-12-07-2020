const authHeader = () => {
    const accessToken = sessionStorage.getItem('accessToken');
    if (accessToken) {
        return { 'accessToken': accessToken };
    } else {
        return {};
    }
}

const isAuthenticated = () => {
    const accessToken = sessionStorage.getItem('accessToken');
    return accessToken != null;
}


export {
    authHeader,
    isAuthenticated
};
