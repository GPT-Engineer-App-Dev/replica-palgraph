import React from 'react';
import { Button } from "@/components/ui/button";

const CourseCard = ({ title, description, image, hours, difficulty }) => (
  <div className="bg-gray-800 rounded-lg overflow-hidden">
    <img src={image} alt={title} className="w-full h-40 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-400 mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-400">{hours} hours</span>
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

const Courses = () => {
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

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4">Data Structures & Algorithms</h2>
        <p className="text-gray-400 mb-8">Follow a structured path to learn all of the core data structures & algorithms. Perfect for coding interview preparation.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <CourseCard
            title="Algorithms & Data Structures for Beginners"
            description="Learn the foundations of coding interviews."
            image="/placeholder.svg"
            hours="25"
            difficulty="Easy"
          />
          <CourseCard
            title="Advanced Algorithms"
            description="Learn every algorithm you would ever need."
            image="/placeholder.svg"
            hours="25"
            difficulty="Hard"
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4">System Design</h2>
        <p className="text-gray-400 mb-8">Brush up on core system design concepts for designing robust backend systems.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <CourseCard
            title="System Design for Beginners"
            description="Learn the foundations of system design interviews."
            image="/placeholder.svg"
            hours="10"
            difficulty="Medium"
          />
          <CourseCard
            title="System Design Interview"
            description="Learn common system design interview questions."
            image="/placeholder.svg"
            hours="10"
            difficulty="Medium"
          />
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4">Object Oriented Design</h2>
        <p className="text-gray-400 mb-8">Master object-oriented programming concepts and design patterns.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <CourseCard
            title="Object-Oriented Design Interview"
            description="Learn how to answer OOD interview questions."
            image="/placeholder.svg"
            hours="8"
            difficulty="Medium"
          />
          <CourseCard
            title="Design Patterns"
            description="Master all the key design patterns."
            image="/placeholder.svg"
            hours="10"
            difficulty="Hard"
          />
        </div>
      </section>
    </div>
  );
};

export default Courses;
