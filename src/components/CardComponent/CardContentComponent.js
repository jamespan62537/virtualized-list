import PropTypes from "prop-types";

const defaultProps = {
  content: "",
};

const propTypes = {
  content: PropTypes.string,
};

const CardContentComponent = ({ content }) => <p>{content}</p>;

CardContentComponent.defaultProps = defaultProps;
CardContentComponent.propTypes = propTypes;
export default CardContentComponent;
