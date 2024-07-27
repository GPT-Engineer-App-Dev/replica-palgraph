import React from 'react';
import { Button } from "@/components/ui/button";

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

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-center mb-8">
        <Button variant="secondary" className="mr-2">
          <img src="/placeholder.svg" alt="Courses" className="w-4 h-4 mr-2" />
          Courses
        </Button>
        <Button variant="ghost">
          <img src="/placeholder.svg" alt="Lessons" className="w-4 h-4 mr-2" />
          Lessons
        </Button>
      </div>

      {courseSections.map((section, index) => (
        <CourseSection key={index} {...section} />
      ))}
    </div>
  );
};

export default Courses;
