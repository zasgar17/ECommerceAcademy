import { useState } from 'react';

const team = [
  {
    name: 'Ayan Aliyev',
    image: '/assets/ayan.jpg',
    position: 'President',
    school: 'School of IT and Engineering',
    bio: 'Ayan leads the club and organizes strategic initiatives.'
  },
  {
    name: 'Nigar Mammadova',
    image: '/assets/nigar.jpg',
    position: 'Event Coordinator',
    school: 'School of Business',
    bio: 'Nigar manages all events and partnerships.'
  },
  // Add more members as needed
];

function AboutUs() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="pt-24 px-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-12 text-center">Meet Our Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {team.map((member, index) => (
          <div
            key={index}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            className="relative group cursor-pointer transition-transform duration-300 transform hover:scale-105"
          >
            <img src={member.image} alt={member.name} className="w-full h-72 object-cover rounded-xl shadow-md" />
            {hovered === index && (
              <div className="absolute inset-0 bg-black/60 text-white p-4 flex flex-col justify-center rounded-xl">
                <h2 className="text-xl font-bold">{member.name}</h2>
                <p className="text-sm italic">{member.position} - {member.school}</p>
                <p className="mt-2 text-sm">{member.bio}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;