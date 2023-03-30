import { useQueries } from "@tanstack/react-query"
import axios from "axios";

const fetchData = (id) => {
    return axios.get(`http://localhost:4000/superheroes/${id}`)
}

export const DynamicParallelQuery = ({ heroIds }) => {

    const data = useQueries(
        heroIds.map((id) => {
        return {
            queryKey: ['super-hero', id],
            queryFn: () => fetchData(id),
        }
    })
    );
    console.log({data});
    return (
        <>
            <p>dynamic parallel queries</p>
            {data.map((data) => <p>{data.data.name}</p>)}
        </>
    )
}