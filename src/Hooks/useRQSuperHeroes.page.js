import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { request } from "../utils/axios-utils";
const addData = (hero) => {
    // return axios.post("http://localhost:4000/superheroes", data);
    return request({ url: '/superheroes', method: 'post', data: hero })
}

export const UseRQSuperheroes = (onSuccess, onError) => {

    return useQuery(['superHeroes'], () => { //queryKey
        // return axios.get("http://localhost:4000/superheroes"
        return request({ url: '/superheroes' }
            , {
                onSuccess, onError,
            }); //fetcher function
    },
        { //object with options
            // select: (data) => {
            //     const heroName = data.data.map((hero) => hero.name);
            //     return heroName
            // },
        })
}

export const useMutateFunction = () => {
    const queryClient = useQueryClient();
    return useMutation(addData, {
        onSuccess: () => {
            queryClient.invalidateQueries('superHeroes')
        }
    });
}