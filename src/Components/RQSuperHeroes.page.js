import { useMutateFunction, UseRQSuperheroes } from "../Hooks/useRQSuperHeroes.page";
import { Link } from "react-router-dom";
import { useState } from "react";

export const RQSuperHeroPage = () => {
  const [name, setName] = useState('');
  const [alterEgo, setalterEgo] = useState('');
  const { data, isLoading, isError, error, isFetching, refetch } = UseRQSuperheroes();
  const { mutate: AddData } = useMutateFunction()

  const clickHandler = () => {
    console.log(name, alterEgo);
    AddData({ name, alterEgo });
  }

  console.log({ isLoading, isFetching });

  if (isLoading) {
    return <p>Loading...</p>
  }
  if (isError) {
    return <p>{error.message}</p>
  }

  return (
    <>
      <h2>RQSuperHeroes Page</h2>
      <input value={name} type="text" onChange={(e) => setName(e.target.value)} />
      <input value={alterEgo} type="text" onChange={(e) => setalterEgo(e.target.value)} />
      <button onClick={clickHandler}>Add</button>
      <hr />
      <button onClick={refetch}>Fetch Data</button>
      {data?.data.map((data) => <p className="list" key={data.name}><Link to={`/rq-super-hero/${data.id}`}>{data.name}</Link></p>)}
      {/* {data.map((heroName) => <p key={heroName}>{heroName}</p>)} */}
    </>)
}