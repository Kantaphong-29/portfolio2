import React from 'react'

import Card from './Card'
import cardData from './../service/cardData';

const CardList = () => {
    return (
        <>
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 py-4'>
                {cardData.map(card => (
                    <Card
                        key={card.id}
                        id={card.id}
                        title={card.title}
                        description={card.description}
                        imageUrl={card.imageUrl}
                    />
                ))}
            </div>
        </>
    )
}

export default CardList 