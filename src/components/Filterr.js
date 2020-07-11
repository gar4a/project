// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Typography from "@material-ui/core/Typography";
// import Slider from "@material-ui/core/Slider";

// const useStyles = makeStyles({
//   root: {
//     width: 180,
//   },
// });

// function valuetext(value) {
//   return `${value}°C`;
// }

// export default function RangeSlider() {
//   const classes = useStyles();
//   const [value, setValue] = React.useState([20, 37]);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <div className={classes.root}>
//       <Typography id="range-slider" gutterBottom>
//         Temperature range
//       </Typography>
//       <Slider
//         value={value}
//         onChange={handleChange}
//         valueLabelDisplay="auto"
//         aria-labelledby="range-slider"
//         getAriaValueText={valuetext}
//       />
//       <form class="range-field w-75">
//         <input class="border-0" type="range" min="0" max="100" />
//       </form>
//     </div>
//   );
// }
