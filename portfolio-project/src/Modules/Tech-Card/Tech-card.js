import './Tech-card.css';

const TechCard = ({ image, name }) => {
    return (
      <div className="tech-card">
        <img src={image} alt={name} />
        <h3>{name}</h3>
      </div>
    );
  };
  
  export default TechCard;
  