export const Header = ({ heading, strapline }) => {
  return (
    <header className="Header">
      <h1 className="Header__h1">{heading}</h1>
      <div className="Header__strapline">{strapline}</div>
    </header>
  );
};

export default Header;
