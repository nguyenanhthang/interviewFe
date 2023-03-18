import http from '../utils/http';

export const getUsers = (page: number | string, limit: number | string, signal?: AbortSignal) =>
    http.get('api', {
        params: {
            page: page,
            results: limit
        },
        signal
    });
