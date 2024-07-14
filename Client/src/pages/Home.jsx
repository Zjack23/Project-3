import Card from './Card'; // Adjust the path as per your project structure

const Home = () => {
  // Sample data for cards
  const cards = [
    { id: 1,  content: 'Content for Card 1', image: '/images/image2.jpg' },
    { id: 2,  content: 'Content for Card 2', image: '/images/image3.jpg' },
    { id: 3,  content: 'Content for Card 3', image: '/images/image5.jpg' },
    { id: 4,  content: 'Golden Eye', image: '/images/image6.jpg' },
    
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
