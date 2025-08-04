import { useState } from 'react';

const team = [
  {
    name: 'Maryam Valiyeva',
    image: 'https://github.com/zasgar17/pics/blob/main/WhatsApp%20Image%202025-07-31%20at%2015.00.34.jpeg?raw=true',
    position: 'President',
    // school: 'BAPA',
    // bio: 'Maryam leads the club and organizes strategic initiatives.'
  },
  {
    name: 'Jeyhun Gasimzade',
    image: 'https://github.com/zasgar17/pics/blob/main/PHOTO-2025-02-27-23-28-43.jpg?raw=true',
    position: 'Founder'
  },
  {
    name: 'Mehriban Huseyinli',
    image: 'https://github.com/zasgar17/pics/blob/main/IMG_7213_anonymous.jpg?raw=true',
    position: 'Head Manager'
  },
  {
    name: 'Baba Alizada',
    image: 'https://github.com/zasgar17/pics/blob/main/PHOTO-2025-03-05-18-35-02.jpg?raw=true',
    position: 'Head Manager'
  },
  {
    name: 'Leyla Safarova',
    image: 'https://github.com/zasgar17/pics/blob/main/PHOTO-2025-03-02-15-51-43.jpg?raw=true',
    position: 'Project Manager'
  },
  {
    name: 'Zarif Ibadzada',
    image: 'https://github.com/zasgar17/pics/blob/main/Untitled450_20250123220158_anonymous.png?raw=true',
    position: 'Founder'
  },
  {
    name: 'Fatima Irahimli',
    image: 'https://github.com/zasgar17/pics/blob/main/PHOTO-2025-07-14-22-06-52.jpg?raw=true',
    position: 'Founder'
  },
  {
    name: 'Kurshad Rustamov',
    image: 'https://github.com/zasgar17/pics/blob/main/PHOTO-2025-03-06-12-27-06.jpg?raw=true',
    position: 'Head of HR',
  },
  {
    name: 'Mehriban Mukhtarova',
    image: 'https://github.com/zasgar17/pics/blob/main/fd3b9608-0dc0-4be8-b22d-6c79352b91ca_anonymous.jpg?raw=true',
    position: 'Head of HR',
  },
  {
    name: 'Jeyhana Huseyinli',
    image: 'https://github.com/zasgar17/pics/blob/main/IMG_9623_anonymous.jpg?raw=true',
    position: 'HR Manager',
  },
  {
    name: 'Aysel Israfilzade',
    image: 'https://github.com/zasgar17/pics/blob/main/dd89f50c-96d5-4528-ab78-a0d9ce31bcb2_anonymous.jpg?raw=true',
    position: 'HR Manager',
  },
  {
    name: 'Aisha Salmanova',
    image: 'https://github.com/zasgar17/pics/blob/main/ecom%20photo_anonymous.jpg?raw=true',
    position: 'Head of SMM',
  },
  {
    name: 'Nazrin Huseyinli',
    image: 'https://github.com/zasgar17/pics/blob/main/IMG_6022_anonymous.jpg?raw=true',
    position: 'SMM',
  },
  {
    name: 'Farah Amrahova',
    image: 'https://github.com/zasgar17/pics/blob/main/IMG_5109_anonymous.jpg?raw=true',
    position: 'SMM',
  },
  {
    name: 'Zahide Mammedzada',
    image: 'https://github.com/zasgar17/pics/blob/main/PHOTO-2025-03-05-21-12-23.jpg?raw=true',
    position: 'SMM',
  },
  {
    name: 'Agil Chiragli',
    image: 'https://github.com/zasgar17/pics/blob/main/Photoroom-20250121_142247_anonymous.png?raw=true',
    position: 'SMM',
  },
  {
    name: 'Rza Alasgarli',
    image: 'https://github.com/zasgar17/pics/blob/main/IMG_6073_anonymous.jpg?raw=true',
    position: 'Head Designer',
  },
  {
    name: 'Jala Alamammadli',
    image: 'https://github.com/zasgar17/pics/blob/main/Jala-3_anonymous.jpg?raw=true',
    position: 'Graphic Designer',
  },
  {
    name: 'Ramina Rzayeva',
    image: 'https://github.com/zasgar17/pics/blob/main/PHOTO-2025-03-05-20-03-37.jpg?raw=true',
    position: 'Graphic Designer',
  },
  {
    name: 'Ayan Gasimzada',
    image: 'https://github.com/zasgar17/pics/blob/main/PHOTO-2025-03-05-19-29-16.jpg?raw=true',
    position: 'Graphic Designer',
  },
  {
    name: 'Shamil Kazimli',
    image: 'https://github.com/zasgar17/pics/blob/main/1710610248070%20(1)_anonymous.jpg?raw=true',
    position: 'Video Editor',
  },
  {
    name: 'Elnar Humbatov',
    image: 'https://github.com/zasgar17/pics/blob/main/PHOTO-2025-03-05-21-23-59.jpg?raw=true',
    position: 'Video Editor',
  },
  // Add more members as needed
];

function AboutUs() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="pt-24 px-4 max-w-7xl mx-auto">
  <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center">Meet Our Team</h1>
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
    {team.map((member, index) => (
      <div
        key={index}
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className="relative group cursor-pointer transition-transform duration-300 transform hover:scale-105"
      >
        <img src={member.image} alt={member.name} className="w-full h-48 object-cover rounded-xl shadow-md" />
        {hovered === index && (
          <div className="absolute inset-0 bg-black/60 text-white p-3 flex flex-col justify-center rounded-xl">
            <h2 className="text-sm font-bold">{member.name}</h2>
            <p className="text-xs italic">{member.position}</p>
            {/* <p className="mt-1 text-xs">{member.bio}</p> */}
          </div>
        )}
      </div>
    ))}
  </div>
</div>

  );
}

export default AboutUs;