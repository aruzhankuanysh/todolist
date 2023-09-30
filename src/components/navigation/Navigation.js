//Navigation
import { Box, Button, ButtonGroup } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const buttons = [
  <Button key="one">Список задач</Button>,
  <Button key="two">Настройки</Button>,
];

function Navigation() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          "& > *": {
            m: 1,
            width: '200px',
            borderRight: '1px solid'
          },
          height: '100%',
        }}
      >
        <ButtonGroup
          orientation="vertical"
          aria-label="vertical contained button group"
          variant="text"
        >
          <Link to="/">
            <Button key="one">Список задач</Button>
          </Link>
          <Link to="/settings">
            <Button key="two">Настройки</Button>
          </Link>
        </ButtonGroup>
      </Box>
    </>
  );
}

export default Navigation;
