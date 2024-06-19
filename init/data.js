let sampleListings = [
    {
        title: "My Home",
        description: "By the Beach",
        image: "https://images.unsplash.com/photo-1679817609557-3276360e35d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D",
        price: 1200,
        location: "Calangute, Goa",
        country: "India"
    },
    {
        title: "City Apartment",
        description: "Modern apartment in the city center",
        image: "https://images.unsplash.com/photo-1516315138947-26e8f277dbe3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNpdHklMjBhcGFydG1lbnR8ZW58MHx8MHx8fDA%3D",
        price: 2000,
        location: "Mumbai, Maharashtra",
        country: "India"
    },
    {
        title: "Mountain Cabin",
        description: "Cozy cabin in the mountains",
        image: "https://images.unsplash.com/photo-1620393518579-65b081581e32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vdW50YWluJTIwY2FiaW58ZW58MHx8MHx8fDA%3D",
        price: 1500,
        location: "Manali, Himachal Pradesh",
        country: "India"
    },
    {
        title: "Desert Villa",
        description: "Luxurious villa in the desert",
        image: "https://images.unsplash.com/photo-1706464662649-5b075ef6e5af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGVzZXJ0JTIwdmlsbGF8ZW58MHx8MHx8fDA%3D",
        price: 3000,
        location: "Jaisalmer, Rajasthan",
        country: "India"
    },
    {
        title: "Lake House",
        description: "Beautiful house by the lake",
        image: "https://images.unsplash.com/photo-1600340062385-f4aa726fca50?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TGFrZSUyMEhvdXNlfGVufDB8fDB8fHww",
        price: 1800,
        location: "Nainital, Uttarakhand",
        country: "India"
    },
    {
        title: "Forest Retreat",
        description: "Secluded retreat in the forest",
        image: "https://images.unsplash.com/photo-1578514835108-47211be9e42e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Rm9yZXN0JTIwcmV0cmVhdHxlbnwwfHwwfHx8MA%3D%3D",
        price: 2200,
        location: "Coorg, Karnataka",
        country: "India"
    },
    {
        title: "Urban Loft",
        description: "Chic loft in the urban area",
        image: "https://images.unsplash.com/photo-1504528407335-db2c175db039?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXJiYW4lMjBsb2Z0fGVufDB8fDB8fHww",
        price: 2500,
        location: "Bengaluru, Karnataka",
        country: "India"
    },
    {
        title: "Countryside Cottage",
        description: "Quaint cottage in the countryside",
        image: "https://images.unsplash.com/photo-1505916349660-8d91a99c3e23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q291bnRyeXNpZGUlMjBDb3R0YWdlfGVufDB8fDB8fHww",
        price: 1400,
        location: "Ooty, Tamil Nadu",
        country: "India"
    },
    {
        title: "Hilltop Bungalow",
        description: "Spacious bungalow on a hilltop",
        image: "https://plus.unsplash.com/premium_photo-1685133855379-711aa008f7ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fEhpbGx0b3AlMjBCdW5nYWxvd3xlbnwwfHwwfHx8MA%3D%3D",
        price: 2700,
        location: "Shillong, Meghalaya",
        country: "India"
    },
    {
        title: "Beachfront Villa",
        description: "Exclusive villa on the beachfront",
        image: "https://images.unsplash.com/photo-1585551897142-80acdcaab4b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8QmVhY2hmcm9udCUyMFZpbGxhfGVufDB8fDB8fHww",
        price: 3500,
        location: "Pondicherry",
        country: "India"
    },
    {
        title: "My Home",
        description: "By the Beach",
        image: "https://images.unsplash.com/photo-1679817609557-3276360e35d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D",
        price: 1200,
        location: "Calangute, Goa",
        country: "India"
    },
    {
        title: "City Apartment",
        description: "Modern apartment in the city center",
        image: "https://images.unsplash.com/photo-1516315138947-26e8f277dbe3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNpdHklMjBhcGFydG1lbnR8ZW58MHx8MHx8fDA%3D",
        price: 2000,
        location: "Mumbai, Maharashtra",
        country: "India"
    },
    {
        title: "Mountain Cabin",
        description: "Cozy cabin in the mountains",
        image: "https://images.unsplash.com/photo-1620393518579-65b081581e32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vdW50YWluJTIwY2FiaW58ZW58MHx8MHx8fDA%3D",
        price: 1500,
        location: "Manali, Himachal Pradesh",
        country: "India"
    },
    {
        title: "Desert Villa",
        description: "Luxurious villa in the desert",
        image: "https://images.unsplash.com/photo-1706464662649-5b075ef6e5af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGVzZXJ0JTIwdmlsbGF8ZW58MHx8MHx8fDA%3D",
        price: 3000,
        location: "Jaisalmer, Rajasthan",
        country: "India"
    },
    {
        title: "Lake House",
        description: "Beautiful house by the lake",
        image: "https://images.unsplash.com/photo-1600340062385-f4aa726fca50?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TGFrZSUyMEhvdXNlfGVufDB8fDB8fHww",
        price: 1800,
        location: "Nainital, Uttarakhand",
        country: "India"
    },
    {
        title: "Forest Retreat",
        description: "Secluded retreat in the forest",
        image: "https://images.unsplash.com/photo-1578514835108-47211be9e42e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Rm9yZXN0JTIwcmV0cmVhdHxlbnwwfHwwfHx8MA%3D%3D",
        price: 2200,
        location: "Coorg, Karnataka",
        country: "India"
    },
    {
        title: "Urban Loft",
        description: "Chic loft in the urban area",
        image: "https://images.unsplash.com/photo-1504528407335-db2c175db039?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXJiYW4lMjBsb2Z0fGVufDB8fDB8fHww",
        price: 2500,
        location: "Bengaluru, Karnataka",
        country: "India"
    },
    {
        title: "Countryside Cottage",
        description: "Quaint cottage in the countryside",
        image: "https://images.unsplash.com/photo-1505916349660-8d91a99c3e23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q291bnRyeXNpZGUlMjBDb3R0YWdlfGVufDB8fDB8fHww",
        price: 1400,
        location: "Ooty, Tamil Nadu",
        country: "India"
    },
    {
        title: "Hilltop Bungalow",
        description: "Spacious bungalow on a hilltop",
        image: "https://plus.unsplash.com/premium_photo-1685133855379-711aa008f7ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fEhpbGx0b3AlMjBCdW5nYWxvd3xlbnwwfHwwfHx8MA%3D%3D",
        price: 2700,
        location: "Shillong, Meghalaya",
        country: "India"
    },
    {
        title: "Beachfront Villa",
        description: "Exclusive villa on the beachfront",
        image: "https://images.unsplash.com/photo-1585551897142-80acdcaab4b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8QmVhY2hmcm9udCUyMFZpbGxhfGVufDB8fDB8fHww",
        price: 3500,
        location: "Pondicherry",
        country: "India"
    }
];

module.exports = {data:sampleListings};

