import Card from "../Card";

export const Cards = ({ data }) => {
  return (
    <div className="Cards">
      {data.map((item, i) => {
        return (
          <div className="Cards__card" key={`card-${i}`}>
            <Card name={item.name} address={item.address} email={item.email} />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
