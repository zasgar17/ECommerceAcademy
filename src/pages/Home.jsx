import React from 'react';

function Home() {
  return (
    <div className="pt-24">
      {/* Banner */}
      <div className="text-center bg-[#2e5941] text-white py-6 px-4">
        <h1 className="text-4xl md:text-5xl font-bold font-[cursive] tracking-wide">
          WELCOME TO E-COMMERCE CLUB
        </h1>
      </div>

      {/* Intro Section */}
      <div className="bg-[#b5d6c7] px-6 md:px-20 py-12 text-center text-black">
        <p className="max-w-3xl mx-auto text-lg font-medium font-serif leading-7 tracking-wide">
          YOUR GO-TO HUB FOR EXPLORING THE <br />
          DIGITAL MARKETPLACE, SPARKING <br />
          INNOVATION, AND CONNECTING STUDENT <br />
          MINDS SHAPING THE FUTURE OF ONLINE <br />
          BUSINESS.
        </p>
      </div>

      {/* New Release Marquee */}
      <div className="bg-green-800 text-white py-2 overflow-hidden whitespace-nowrap">
        <marquee behavior="scroll" direction="left" className="text-sm font-semibold tracking-widest">
          🎉 New Release: Join our upcoming Innovation Summit | Masterclass in Digital Marketing | Collaboration with ADA Tech Clubs! 🎉
        </marquee>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 md:px-20 bg-[#f8f8f8]">
        {[
          {
            title: 'Masterclass on Dropshipping & Digital Marketing',
            content: 'Industry experts led a hands-on workshop covering product sourcing, SEO strategies, and conversion funnels tailored for student entrepreneurs.'
          },
          {
            title: 'E-Commerce Club Kicks Off with Innovation Mixer at ADA University',
            content: 'Students from various majors gathered to pitch digital business ideas, network with peers, and meet mentors from top e-commerce startups.'
          },
          {
            title: 'Collaboration Alert: E-Commerce Club Partners with ADA Tech & Business Clubs',
            content: 'A new initiative aims to launch a campus-wide virtual marketplace built by students, for students — combining tech, design, and business talent.'
          },
        ].map((item, idx) => (
          <div key={idx} className="shadow-lg rounded-md overflow-hidden">
            <div className="bg-green-900 text-white px-4 py-3 text-base font-bold font-serif">
              {item.title}
            </div>
            <div className="bg-white px-4 py-4 text-sm font-serif text-gray-700">
              {item.content}
            </div>
          </div>
        ))}
      </div>

      <section>
        <h2 className="text-2xl font-semibold">Upcoming Event: E-Commerce Innovation Summit</h2>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><b>Date:</b> August 15, 2025</li>
          <li><b>Time:</b> 2:00 PM – 5:30 PM (GMT+4)</li>
          <li><b>Location:</b> Main Auditorium & Zoom</li>
          <li><b>Keynote:</b> "The Future of E-Commerce: AI, AR & Automation"</li>
          <li><b>Panel:</b> "Sustainable Supply Chains in E-Commerce"</li>
          <li>Student Startup Pitches & Networking Hour</li>
        </ul>
      </section>
    </div>);}

export default Home;