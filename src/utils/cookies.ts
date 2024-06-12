export const getCookie = () => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; access_token=`);
    if (parts.length === 2) {
        return parts.pop()?.split(';').shift();
    }
}

export const removeCookie = () => {
    document.cookie = `access_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; Secure; SameSite=Strict`;
};