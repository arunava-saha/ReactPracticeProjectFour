import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/arunava-saha")
  //       .then((res) => res.json())
  //       .then((json) => {
  //         console.log(json);
  //         setData(json);
  //       });
  //   }, []);

  return (
    <div className="text-center m-4 p-2 bg-slate-400 text-4xl font-semibold ">
      Github Public Repos: {data.public_repos}
      <img
        src={data.avatar_url}
        className="rounded-full"
        alt="Profile Picture"
        width={300}
      />
    </div>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/arunava-saha");
  return response.json();
};
