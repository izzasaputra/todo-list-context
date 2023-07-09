import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPenToSquare,
  faCheck,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { TodoContext } from "../context/TodoContext";
import Tooltip from "@mui/material/Tooltip";
import "./TodoCard.scss";

export default function OutlinedCard({ data }) {
  const { handleDelete, handleEdit, handleStatus, editTodo } =
    useContext(TodoContext);

  return (
    <Box sx={{ minWidth: 275, maxWidth: 500, marginBottom: 2 }}>
      <Card sx={{}}>
        <CardContent
          className={
            data === editTodo
              ? "card-container-edit"
              : data.completed
              ? "card-container-success"
              : "card-container-red"
          }
        >
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Typography variant="body2" className="card-text">
                {data.title}
              </Typography>
              <Typography variant="body2" className="card-status">
                Status: {data.completed ? "selesai" : "belum selesai"}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2" sx={{ display: "flex" }}>
                <Tooltip title={data.completed ? "Batalkan" : "Tandai"}>
                  <FontAwesomeIcon
                    icon={data.completed ? faXmark : faCheck}
                    onClick={() => handleStatus(data)}
                    className="card_action_icon"
                  />
                </Tooltip>
                <Tooltip title="Edit">
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    onClick={() => handleEdit(data)}
                    className="card_action_icon"
                  />
                </Tooltip>
                <Tooltip title="Hapus">
                  <FontAwesomeIcon
                    icon={faTrash}
                    onClick={() => handleDelete(data)}
                    className="card_action_icon"
                  />
                </Tooltip>
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}
