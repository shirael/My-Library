import { UserType } from '../types/user.types'
import axios from '../utils/axios'

export const getUsers = async () => {
    const response = await axios.get('/User')
    const users = await response.data
    return users
}

export const getUserById = async (id: Number) => {
    const response = await axios.get(`/User/${id}`)
    const user = response.data
    return user
}

export const addUser = async (user: Omit<UserType, 'userId'>) => {
    const response = await axios.post('/User/SignUp', user)
    const newUser = response.data
    return newUser
}

// export const addUser = async (user: Omit<UserType, 'userId'>) => {
//     try {
//         const response = await axios.post('https://localhost:7269/api/User/SignUp', user, {
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         });
//         return response.data;
//     } catch (error) {
//         console.error('Error sending data:', error);
//         throw error;
//     }
// };


export const updateUser = async (user: UserType, id: number) => {
    const response = await axios.put(`/User/${id}`, user)
    const updatedUser = response.data
    return updatedUser
}

export const deleteUser = async (id: number) => {
    const response = await axios.delete(`/User/${id}`)
    return response
}

export const login = async (mail: string, password: string) => {
    const response = await axios.post(`SignIn/${mail}/${password}`)
    return {
        user:  response.data.user,
        token: response.data.token
    }
}
