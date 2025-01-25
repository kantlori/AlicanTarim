import React from 'react';

function WorkCard({ cards }) {
    return (
        <div className="work-card-container">
            {cards.map((card, index) => (
                <div className="work-card" key={index}>
                    <img src={card.image} alt={card.desc} />
                    <h4>{card.category}</h4>
                    <p>{card.desc}</p>
                </div>
            ))}
        </div>
    );
}

export default WorkCard;
