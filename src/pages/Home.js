import React from "react";
import TodoForm from "../container/TodoForm";
import { Typography } from "@mui/material";
import "./Home.scss";

export default function Home() {
  return (
    <div className="home-body">
      <div className="home-container">
        <Typography variant="h4" className="title">
          Todo List
        </Typography>
        <div className="border-form">
          <TodoForm />
        </div>
      </div>
    </div>
  );
}
