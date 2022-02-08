import React, { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import numberWithCommas from "../utils/numberWithCommas";

const PrettoSlider = styled(Slider)({
  color: "#673ab7",
  height: 8,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 11,
    background: "unset",
    padding: 0,
    width: 50,
    height: 50,
    borderRadius: "0 0 0 50%",
    backgroundColor: "#8561c5",
    transformOrigin: "bottom left",
    transform: "translate(50%, -60%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, 110%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});
const PriceSlider = (props) => {
  const [value, setValue] = useState(0);
  const onChangeHanlde = (event, value) => {
    setValue(value);
    if(props.onChange) {
      props.onChange(value);
    }
  };
  return (
    <Box sx={{ width: 200 }}>
      <Typography id="non-linear-slider" gutterBottom>
        Giá: {numberWithCommas(value)} VND
      </Typography>
      <PrettoSlider
        min={0}
        step={100000}
        max={30000000}
        valueLabelDisplay="auto"
        aria-label="pretto slider"
        valueLabelFormat={(value => {
           return numberWithCommas(value)
        })}
        value={value}
        onChange={onChangeHanlde}
      />
    </Box>
  );
}
export default PriceSlider;