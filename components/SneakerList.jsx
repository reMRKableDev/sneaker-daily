import React from "react";

import SneakerCard from "./SneakerCard";

const SneakerList = ({ sneakersList }) =>
  sneakersList.map((sneakerItem) => {
    const { fields, sys } = sneakerItem;
    return <SneakerCard key={sys?.id} {...fields} />;
  });

export default SneakerList;
