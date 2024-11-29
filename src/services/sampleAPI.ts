import { get, post, put, remove } from "./apiCaller"

export const getSample = (id: string) => {
    return get(`/sample/${id}`);
};

export const postSample = (sample: object) => {
    return post(`/sample/create`, sample);
};

export const putSample = (id: string, sample: object) => {
    return put(`/sample/update/${id}`, sample);
};

export const deleteSample = (id: string) => {
    return remove(`/sample/delete/${id}`);
};