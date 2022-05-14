import { Button } from "@mui/material";
import "./button.css";

const ButtonTypeDado = (props) => {
  if (props.isSubmit) {
    return <Button variant="outlined">{props.text}</Button>;
  }

  return <Button variant="contained">{props.text}</Button>;
};

export default ButtonTypeDado;
