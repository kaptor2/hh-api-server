import axios from './core';

export const citysApi = {
    getAll: () => axios.get(process.env.API_HH_URL + 'salary_statistics/dictionaries/salary_areas')
}