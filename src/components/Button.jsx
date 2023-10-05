import PropTypes from "prop-types";

const Button = ({
  text = "Button",
  onClick = () => {
    console.log("clicking");
  },
  bgColor = "green",
  color = "white",
  theClass = "btn",
}) => {
  return (
    <button className={`${theClass}`} style={{ color: color, backgroundColor: bgColor }} onClick={onClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  theClass: PropTypes.string,
  textColor: PropTypes.string,
};

export default Button;
