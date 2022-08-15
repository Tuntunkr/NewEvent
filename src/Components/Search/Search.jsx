import React from "react";
import "../Search/Search.css";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";
function Search() {
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };
  return (
    <Box mt={2} ml={6} className="searchbarContainer">
      
      <input
        type="search"
        placeholder="Search topic by names,tags or categories"
      />
      <button type="search" className="blogbtn">
        Search
      </button>
      <span>
        <img src="../images/search.svg" alt="" />
      </span>
      <Box mt={2} ml={4}>
        <Stack direction="row" spacing={2}>
          <Chip
            className="filters"
            label="filter"
            onClick={handleClick}
            onDelete={handleDelete}
          />
          <Chip
            label="filter"
            className="filters"
            onClick={handleClick}
            onDelete={handleDelete}
          />
          <Chip
            label="filter"
            className="filters"
            onClick={handleClick}
            onDelete={handleDelete}
          />
          <Chip
            label="filter"
            className="filters"
            onClick={handleClick}
            onDelete={handleDelete}
          />
        </Stack>
      </Box>
      </Box>

  )
}

export default Search;
