import call from '../api/callApi';

const AUTH_PATH = '/auth'

export const login = async (email) => {
    return await call(`${AUTH_PATH}/login`, 'POST', { email });
}