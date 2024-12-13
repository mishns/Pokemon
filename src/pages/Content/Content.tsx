import { default as React, FC } from "react";
import styles from "./content.css";
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "@pages/LoginPage";
import { GamePage } from "@pages/GamePage";

export const Content: FC = () => {
  return (
    <div className="container">
      <div className={styles.content}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/game" element={<GamePage />} />
        </Routes>
      </div>
    </div>
  );
};
