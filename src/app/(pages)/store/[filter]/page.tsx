import React from "react";

const page = ({ params }: { params: { filter: string } }) => {
  return <div>page: {params.filter}</div>;
};

export default page;
