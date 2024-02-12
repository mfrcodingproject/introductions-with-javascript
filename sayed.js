const Sayed = {
    Name: "Sayed",
    LName: "Nickbeen",
    profession: "scientest",
    address: "madrid",
    interests: "programming",
    hobbies: ["travelling", "studying"]
};

// Check if Sayed has 'programming' as one of his interests
const hasProgrammingInterest = Sayed.interests === 'programming';
console.log('Does Sayed have programming as one of his interests?', hasProgrammingInterest);

// Check if Sayed has 'travelling' as one of his hobbies
const hasTravellingHobby = Sayed.hobbies.includes('travelling');
console.log('Does Sayed have travelling as one of his hobbies?', hasTravellingHobby);