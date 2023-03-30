import { useParams } from "react-router-dom"
import { UseRQSuperhero } from "../Hooks/useRQSuperHero";

export const RQSuperHero = () => {
    const {id} = useParams();
    console.log(id);
    const { data, isLoading, isError,error } = UseRQSuperhero(id);
    if (isLoading) {
        return <p>Loading...</p>
    }
    if (isError) {
        return <p>{error.message}</p>
    }
    return <p>{data?.data.name}-{data?.data.alterEgo}</p>
    
}