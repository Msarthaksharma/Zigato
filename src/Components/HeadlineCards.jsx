import React from 'react'
import Card from './Card'

const contentArray = [
    {
        url: 'https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJyZWFrZmFzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60',
        head: "Sun's Out, BOGO's Out",
        text: "Through 8/26"
    },
    {
        url: 'https://images.pexels.com/photos/761854/pexels-photo-761854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        head: "New Restraunts",
        text: "Added Daily"
    },
    {
        url: 'https://images.pexels.com/photos/3992134/pexels-photo-3992134.jpeg',
        head: "We Deliver Desserts Too",
        text: "Tasty Treats"
    }
];


    const HeadlineCards = () => {
        // Define 'cards' outside JSX
        const cards = contentArray.map((item, index) => (
            <Card key={index} url={item.url} head={item.head} text={item.text} />
        ));
        console.log(cards)
        return (
            <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
                {cards}
            </div>
        );
    }
export default HeadlineCards;