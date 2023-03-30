import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchData = (email) => {
    return axios.get(`http://localhost:4000/users/${email}`)
}
const fetchCourses = (channelId) => {
    return axios.get(`http://localhost:4000/channels/${channelId}`)

}
export const DependentQuery = ({ email }) => {
    const { data: user } = useQuery(['user', email], () => fetchData(email));
    const channelId = user?.data.channelId
    const { data: courses } = useQuery(['courses', email], () => fetchCourses(channelId), {
        enabled: !!channelId
    });

    return (
        <>
               <p>{user?.data.id}-{user?.data.channelId}</p>
               <p>{courses?.data.id}-{courses?.data.courses.map((course) => <p>{course}</p>)}</p>
        </>
    )
}