import Card from './Card'; // Adjust the path as per your project structure

const Home = () => {
  // Sample data for cards
  const cards = [
    { id: 1,  content: 'Die Another Day', image: '/images/image1.webp' },
    { id: 2,  content: 'Spectre', image: '/images/image2.webp' },
    { id: 3,  content: 'SkyFall', image: '/images/image3.webp' },
    { id: 4,  content: 'Quantum Of Solace', image: '/images/image4.webp' },
    { id: 5,  content: 'Casino Royale', image: '/images/image5.webp' },
    { id: 6,  content: 'Tomorrow Never Dies', image: '/images/image6.webp' },
    { id: 7,  content: 'Golden Eye', image: '/images/image7.webp' },
    { id: 8,  content: 'Dr. No', image: '/images/image8.webp' },
    { id: 9,  content: 'From Russia With Love', image: '/images/image9.webp' },
    { id: 10,  content: 'No Time To Die', image: '/images/image10.webp' },
    
    
    // Add more cards as needed
  ];

  return (
    <div className="container">
      <h2>James Bond Movies</h2>
      <div className="card-container">
        {cards.map(card => (
          <Card key={card.id} title={card.title} content={card.content} image={card.image} />
        ))}
      </div>
    </div>
  );
};

export default Home;
