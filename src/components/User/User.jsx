import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { id } = useParams();
  return (
    <div className="bg-slate-400 text-blue-500 text-center text-3xl p-4">
      User: {id}
    </div>
  );
};

export default User;
