import PropTypes from "prop-types";

const Button = ({
  theType = "button",
  text = "Button",
  onClick = () => {
    console.log("clicking");
  },
  bgColor = "green",
  color = "white",
  theClass = "btn",
}) => {
  return (
    <button
      type={theType}
      className={`${theClass}`}
      style={{ color: color, backgroundColor: bgColor }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  theType: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  theClass: PropTypes.string,
  textColor: PropTypes.string,
};

export default Button;
