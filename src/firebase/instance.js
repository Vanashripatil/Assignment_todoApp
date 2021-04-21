import axios from 'axios';

export default axios.create({
    baseURL: 'https://todo-list-415e4-default-rtdb.firebaseio.com/'
})