import { localhostUserToModel } from "../mappers/localhost-user-mapper";
import { User } from "../modelos/user";


/**
* 
* @param {Number} page 
* @returns {Promise<User[]>} 
*/
export const loadUsers = async(page = 1) =>{

    const url = `${import.meta.env.VITE_BASE_URL}/users?_page=${ page }`;
    const res = await fetch(url);
    const data = await res.json();

    // const users = [];
    // for (let i = 0; i < data.data.length; i++) {
    //    let userModel1 = localhostUserToModel(data.data[i])
    //    let userFinali = new User(userModel1)
    //    users.push(userFinali);
    // }
    
    const users = data.data.map(modeloUsuario => localhostUserToModel(modeloUsuario));
    return users
}