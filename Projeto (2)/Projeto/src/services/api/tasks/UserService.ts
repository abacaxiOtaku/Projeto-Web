import { Api } from "../apiconfig";


const getAll = async () => {
    const {} = await Api().get('/users') 
};
   
const getById = () => { };

const create = () => { };

const updateById = () => { };

const deleteById = () => { };

export const UserService = {
    getAll,
    create,
    getById,
    updateById,
    deleteById,
};