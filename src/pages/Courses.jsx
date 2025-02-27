import React, { useState } from 'react';

import { Link } from 'react-router-dom';

const LessonCard = ({ title, image, description, to }) => (
  <Link to={to} className="block">
    <div className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </div>
  </Link>
);

const CourseCard = ({ title, subtitle, description, image, hours, difficulty }) => (
  <div className="bg-gray-800 rounded-lg overflow-hidden">
    <img src={image} alt={title} className="w-full h-40 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-1">{title}</h3>
      <h4 className="text-lg mb-2">{subtitle}</h4>
      <p className="text-sm text-gray-400 mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <span className="text-sm text-blue-400">{hours} hours</span>
        <span className={`text-sm px-2 py-1 rounded ${
          difficulty === 'Easy' ? 'bg-green-500' :
          difficulty === 'Medium' ? 'bg-yellow-500' :
          'bg-red-500'
        }`}>
          {difficulty}
        </span>
      </div>
    </div>
  </div>
);

const CourseSection = ({ title, description, courses }) => (
  <section className="mb-16 flex">
    <div className="w-1/3 pr-8">
      <h2 className="text-4xl font-bold mb-4">{title}</h2>
      <p className="text-gray-400">{description}</p>
    </div>
    <div className="w-2/3 grid grid-cols-2 gap-8">
      {courses.map((course, index) => (
        <CourseCard key={index} {...course} />
      ))}
    </div>
  </section>
);

const Courses = () => {
  const [activeTab, setActiveTab] = useState('courses');

  const courseSections = [
    {
      title: "Data Structures & Algorithms",
      description: "Follow a structured path to learn all of the core data structures & algorithms. Perfect for coding interview preparation.",
      courses: [
        {
          title: "Algorithms & Data Structures for Beginners",
          subtitle: "Algorithms & Data Structures for Beginners",
          description: "Learn the foundations of coding interviews.",
          image: "/placeholder.svg",
          hours: "25",
          difficulty: "Easy"
        },
        {
          title: "Advanced Algorithms",
          subtitle: "Advanced Algorithms",
          description: "Learn every algorithm you would ever need.",
          image: "/placeholder.svg",
          hours: "25",
          difficulty: "Hard"
        }
      ]
    },
    {
      title: "System Design",
      description: "Brush up on core system design concepts for designing robust backend systems.",
      courses: [
        {
          title: "System Design for Beginners",
          subtitle: "System Design for Beginners",
          description: "Learn the foundations of system design interviews.",
          image: "/placeholder.svg",
          hours: "10",
          difficulty: "Medium"
        },
        {
          title: "System Design Interview",
          subtitle: "System Design Interview",
          description: "Learn common system design interview questions.",
          image: "/placeholder.svg",
          hours: "10",
          difficulty: "Medium"
        }
      ]
    }
  ];

  const lessons = [
    { title: "Python Cheat Sheet", image: "/placeholder.svg", description: "Python Cheat Sheet", to: "/python-cheat-sheet" },
    { title: "Big-O Notation", image: "/placeholder.svg", description: "Full Course", to: "#" },
    { title: "8 Design Patterns Every Programmer Should Know", image: "/placeholder.svg", description: "8 Coding DESIGN Patterns", to: "#" },
    { title: "20 Must-Know System Design Concepts", image: "/placeholder.svg", description: "Scale to the MOON", to: "#" },
    { title: "30-Day JavaScript Coding Challenge", image: "/placeholder.svg", description: "30-Day Challenge", to: "#" },
    { title: "Design a YouTube Clone", image: "/placeholder.svg", description: "Design a YouTube Clone", to: "#" },
    { title: "MongoDB Crash Course", image: "/placeholder.svg", description: "MongoDB IN 1 HOUR", to: "#" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            type="button"
            className={`px-4 py-2 text-sm font-medium border rounded-l-lg focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 ${
              activeTab === 'courses'
                ? 'text-white bg-gray-900 border-gray-900'
                : 'text-gray-900 bg-white border-gray-200 hover:bg-gray-100 hover:text-blue-700'
            }`}
            onClick={() => setActiveTab('courses')}
          >
            <span className="mr-2">📚</span>
            Courses
          </button>
          <button
            type="button"
            className={`px-4 py-2 text-sm font-medium border rounded-r-lg focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 ${
              activeTab === 'lessons'
                ? 'text-white bg-gray-900 border-gray-900'
                : 'text-gray-900 bg-white border-gray-200 hover:bg-gray-100 hover:text-blue-700'
            }`}
            onClick={() => setActiveTab('lessons')}
          >
            <span className="mr-2">📝</span>
            Lessons
          </button>
        </div>
      </div>

      {activeTab === 'courses' ? (
        courseSections.map((section, index) => (
          <CourseSection key={index} {...section} />
        ))
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {lessons.map((lesson, index) => (
            <LessonCard key={index} {...lesson} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Courses;
