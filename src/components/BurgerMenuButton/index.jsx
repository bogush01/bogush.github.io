import "./index.css";

const BurgerMenuButton = (props) => {
  const { className = "" } = props;

  return (
    <div className={`burger-menu-button ${className}`}>
      <span className="burger-menu-button__bar"></span>
      <span className="burger-menu-button__bar"></span>
      <span className="burger-menu-button__bar"></span>
    </div>
  );
};

export default BurgerMenuButton;
