import { default as React, FC } from "react";
import styles from "./gamepage.scss";

interface GamePageProps {}

export const GamePage: FC<GamePageProps> = () => {
  return <div className="">GAME
    {process.env.REGISTER_API}
  </div>;
};
