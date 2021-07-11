export const Card = ({ name, address, email }) => {
  return (
    <a href={`mailto:${email}`} className="Card">
      <div className="Card__inner">
        <h2 className="Card__h2">{name}</h2>
        <div className="Card__address">{address}</div>
      </div>
    </a>
  );
};

export default Card;
