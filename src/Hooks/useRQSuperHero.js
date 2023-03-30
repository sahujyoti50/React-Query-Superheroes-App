import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const UseRQSuperhero = (id) => {
    return useQuery(['super-Hero', id], () => {return axios.get(`http://localhost:4000/superheroes/${id}`);})
}