import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faMobileAlt,
  faServer,
  faDatabase,
  faCode,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
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
    <div className="bg-gray-100 text-gray-900 antialiased leading-relaxed min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-12 sm:py-16 flex flex-col items-center flex-grow">
        {/* Profile Section */}
        <aside className="w-full mb-8 text-center">
          <div className="fade-in">
            <img
              src="profile.webp"
              alt="Yan Naing Lin - Expert Software Engineer in Myanmar specializing in Web, Mobile, and Backend Development"
              className="mx-auto w-28 h-28 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full shadow-lg border border-gray-300 mb-4 object-cover"
            />
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 px-2">
              Yan Naing Lin - Software Engineer in Myanmar
            </h1>
            <h2 className="text-base sm:text-lg md:text-xl font-light mb-4 px-3">
              Expert in DBMS, Web, Mobile & Backend Development
            </h2>

            <div className="flex justify-center">
              <a
                href="https://blog.yannainglin.com"
                className="text-base sm:text-lg font-semibold text-white bg-gray-900 hover:bg-blue-600 px-5 py-2 rounded-lg transition-colors duration-200"
              >
                Visit My Blog
              </a>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="w-full max-w-3xl text-center space-y-12">
          {/* Education */}
          <section id="education" className="fade-in">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">
              Education
            </h2>
            <ul className="list-none space-y-5">
              <li className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
                <FontAwesomeIcon
                  icon={faGraduationCap}
                  className="text-2xl sm:text-3xl"
                />
                <span className="text-base sm:text-lg font-medium text-center sm:text-left">
                  Master of Business Administration (MBA) - European International
                  University
                </span>
              </li>
              <li className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
                <FontAwesomeIcon
                  icon={faGraduationCap}
                  className="text-2xl sm:text-3xl"
                />
                <span className="text-base sm:text-lg font-medium text-center sm:text-left">
                  Postgraduate Diploma in Computer Science - Yangon University
                </span>
              </li>
              <li className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
                <FontAwesomeIcon
                  icon={faGraduationCap}
                  className="text-2xl sm:text-3xl"
                />
                <span className="text-base sm:text-lg font-medium text-center sm:text-left">
                  BSc (Physics) - Bago University
                </span>
              </li>
            </ul>
          </section>

          {/* Skills */}
          <section id="skills" className="fade-in">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">
              Skills
            </h2>
            <ul className="list-none space-y-5">
              <li className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <FontAwesomeIcon
                  icon={faMobileAlt}
                  className="text-2xl sm:text-3xl"
                />
                <span className="text-base sm:text-lg font-medium">
                  Mobile Development (Flutter, Android, iOS)
                </span>
              </li>
              <li className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <FontAwesomeIcon
                  icon={faServer}
                  className="text-2xl sm:text-3xl"
                />
                <span className="text-base sm:text-lg font-medium">
                  Backend Development (Node.js)
                </span>
              </li>
              <li className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <FontAwesomeIcon
                  icon={faDatabase}
                  className="text-2xl sm:text-3xl"
                />
                <span className="text-base sm:text-lg font-medium">
                  Database Management (SQL, No-SQL)
                </span>
              </li>
              <li className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <FontAwesomeIcon icon={faCode} className="text-2xl sm:text-3xl" />
                <span className="text-base sm:text-lg font-medium">
                  Web Development (React, HTML5, CSS3)
                </span>
              </li>
            </ul>
          </section>

          {/* Contact */}
          <section
            id="contact"
            className="fade-in border-t border-gray-300 pt-8 text-center"
          >
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">
              Reach Me Via
            </h2>
            <a
              href="mailto:yannainglin4545@gmail.com"
              className="inline-flex items-center justify-center gap-2 text-base sm:text-lg md:text-xl font-medium text-gray-900 hover:text-blue-700 transition-colors"
            >
              <FontAwesomeIcon icon={faEnvelope} />
              yannainglin4545@gmail.com
            </a>
          </section>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 mt-auto">
        <div className="container mx-auto px-4 text-center text-sm sm:text-base">
          <p>
            &copy; {new Date().getFullYear()} Yan Naing Lin. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
