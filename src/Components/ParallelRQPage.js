import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchSuperHeroes = () => {
    return axios.get(`http://localhost:4000/superheroes`);
}
const fetchSuperFriends = () => {
    return axios.get(`http://localhost:4000/friends`);
}
export const ParallelRQPage = (id) => {
    const { data: superHeroes } = useQuery(['super-Hero', id], fetchSuperHeroes)
    const { data: friends } = useQuery(['super-friends', id], fetchSuperFriends)
    return (
        <>
            <div>
                {superHeroes?.data.map((hero) => <p>{hero.name}</p>)}
                {friends?.data.map((friend) => <p>{friend.name}</p>)}
            </div>
        </>
    )
}