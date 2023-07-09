import React, { useContext } from "react";
import OutlinedCard from "../components/TodoCard";
import { TodoContext } from "../context/TodoContext";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import "./TodoForm.scss";

const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "--TextField-brandBorderColor": "#ffffff",
            "--TextField-brandBorderHoverColor": "#ffffff",
            "--TextField-brandBorderFocusedColor": "#ffffff",
            "& label.Mui-focused": {
              color: "var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: "var(--TextField-brandBorderColor)",
          },
          root: {
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderHoverColor)",
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            "&:before, &:after": {
              borderBottom: "2px solid var(--TextField-brandBorderColor)",
            },
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
              borderBottom: "2px solid var(--TextField-brandBorderHoverColor)",
            },
            "&.Mui-focused:after": {
              borderBottom:
                "2px solid var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            "&:before": {
              borderBottom: "2px solid var(--TextField-brandBorderColor)",
            },
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
              borderBottom: "2px solid var(--TextField-brandBorderHoverColor)",
            },
            "&.Mui-focused:after": {
              borderBottom:
                "2px solid var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
    },
  });

export default function TodoForm() {
  const { todos, onFormSubmit, input, onInputChange, editTodo } =
    useContext(TodoContext);
  const outerTheme = useTheme();

  return (
    <>
      <Box component="form" noValidate autoComplete="off" className="form-container">
        <ThemeProvider theme={customTheme(outerTheme)}>
          <TextField
            label="To Do"
            value={input}
            InputProps={{
              style: { color: "white", marginRight:10 },
            }}
            onChange={(event) => onInputChange(event)}
          />
        </ThemeProvider>
        <Button
          variant="contained"
          color="success"
          className="button-add"
          type="submit"
          onClick={(event) => onFormSubmit(event)}
        >
          {editTodo !== null ? "Edit" : "Kirim"}
        </Button>
      </Box>
      <div>
        {todos.map((todo) => (
          <div key={todo.id}>
            <OutlinedCard data={todo} />
          </div>
        ))}
      </div>
    </>
  );
}
