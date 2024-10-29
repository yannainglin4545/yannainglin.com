// src/App.tsx
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faUniversity, faMobileAlt, faServer, faDatabase, faCode, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

const App: React.FC = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-gray-100 text-gray-900 antialiased leading-relaxed">
      <div className="container mx-auto px-4 py-16 flex flex-col items-center">
        
        <aside className="w-full mb-8 text-center">
          <div className="fade-in">
            <img
              src="profile.png"
              alt="Yan Naing Lin - Myanmar software developer profile"
              className="mx-auto w-32 h-32 sm:w-48 sm:h-48 rounded-full shadow-lg border border-gray-300 mb-4"
            />
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">Yan Naing Lin</h1>
            <p className="text-base sm:text-lg font-light mb-2">Myanmar-Based Software Developer</p>
            <div className="container mx-auto px-4 flex justify-center">
              <ul className="flex space-x-6">
                <li>
                  <a
                    href="https://yannainglin.com/blog"
                    className="text-xl font-semibold text-white bg-gray-900 hover:bg-blue-600 px-4 py-2 rounded-lg"
                  >
                    Visit My Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </aside>

        <main className="w-full md:w-3/4 text-center">
          
          <section id="education" className="py-8 mb-16 fade-in">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Education</h2>
            <ul className="list-none space-y-4">
              <li className="flex items-center justify-center">
                <FontAwesomeIcon icon={faGraduationCap} className="text-xl sm:text-2xl mr-4" />
                <span className="text-lg sm:text-xl font-medium">BSc (Physics) - Bago University</span>
              </li>
              <li className="flex items-center justify-center">
                <FontAwesomeIcon icon={faUniversity} className="text-xl sm:text-2xl mr-4" />
                <span className="text-lg sm:text-xl font-medium">Diploma in Computer Science (YU)</span>
              </li>
            </ul>
          </section>

          <section id="skills" className="py-8 mb-16 fade-in">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Skills</h2>
            <ul className="list-none space-y-4">
              <li className="flex items-center justify-center">
                <FontAwesomeIcon icon={faMobileAlt} className="text-xl sm:text-2xl mr-4" />
                <span className="text-lg sm:text-xl font-medium">Mobile Development (Flutter, Android)</span>
              </li>
              <li className="flex items-center justify-center">
                <FontAwesomeIcon icon={faServer} className="text-xl sm:text-2xl mr-4" />
                <span className="text-lg sm:text-xl font-medium">Backend Development (Node.js, Django)</span>
              </li>
              <li className="flex items-center justify-center">
                <FontAwesomeIcon icon={faDatabase} className="text-xl sm:text-2xl mr-4" />
                <span className="text-lg sm:text-xl font-medium">Database Management (MySQL, PostgreSQL)</span>
              </li>
              <li className="flex items-center justify-center">
                <FontAwesomeIcon icon={faCode} className="text-xl sm:text-2xl mr-4" />
                <span className="text-lg sm:text-xl font-medium">Web Development (React, HTML5, CSS3)</span>
              </li>
            </ul>
          </section>

          <section id="contact" className="py-8 border-t border-gray-300 fade-in text-center">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Reach Me Via</h2>
            <a
              href="mailto:yannainglin4545@gmail.com"
              className="text-lg sm:text-xl font-medium text-gray-900 hover:text-gray-700"
            >
              <FontAwesomeIcon icon={faEnvelope} /> yannainglin4545@gmail.com
            </a>
          </section>

        </main>
      </div>

      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Yan Naing Lin. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
