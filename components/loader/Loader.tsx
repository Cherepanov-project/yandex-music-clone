import React from "react";
import ReactLoading from "react-loading";

interface ILoader {
  type: string;
  color: string;
}

export const Loader: React.FC<ILoader> = ({ type, color }) => (
  <ReactLoading type={"bars"} color={"#fff"} height={16} width={32} />
);
