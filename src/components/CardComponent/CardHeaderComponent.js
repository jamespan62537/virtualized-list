import PropTypes from "prop-types";

const defaultProps = {
  children: null,
};

const propTypes = {
  children: PropTypes.element,
};

const CardHeaderComponent = ({ children }) => {
  return <div className="flex gap-3 w-full">{children}</div>;
};

CardHeaderComponent.defaultProps = defaultProps;
CardHeaderComponent.propTypes = propTypes;
export default CardHeaderComponent;
