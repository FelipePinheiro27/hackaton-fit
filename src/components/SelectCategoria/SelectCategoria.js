import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import "./selectCategoria.css";

const SelectCategoria = (props) => {
  return (
    <div className="categoria">
      <FormControl sx={{ width: 200 }}>
        <InputLabel id="demo-simple-select-helper-label">Categoria</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          disabled={props.disabled}
          value={null}
          label="Categoria"
          onChange={() => console.log("ola")}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectCategoria;
