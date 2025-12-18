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
  const books = [
    {
      slug: "csbookvol1",
      title: "Vol 1: Computer Systems",
      downloadUrl: "https://files.yannainglin.com/csbookvol1.pdf",
      coverSrc: "/csbook1cover.webp",
    },{
      slug: "csbookvol2",
      title: "Vol 2: The Logic and Data",
      downloadUrl: "https://files.yannainglin.com/csbookvol2.pdf",
      coverSrc: "/csbook2cover.webp",
    },{
      slug: "csbookvol3",
      title: "Vol 3: The Math of Computing",
      downloadUrl: "https://files.yannainglin.com/csbookvol3.pdf",
      coverSrc: "/csbook3cover.webp",
    },{
      slug: "csbookvol4",
      title: "Vol 4: Practical Programming  ",
      downloadUrl: "https://files.yannainglin.com/csbookvol4.pdf",
      coverSrc: "/csbook4cover.webp",
    },
    
  ];

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
              className="mx-auto w-24 h-24 sm:w-30 sm:h-30 md:w-30 md:h-30 rounded-full shadow-lg border border-gray-300 mb-4 object-cover"
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

            {/* Books Section */}
            <section className="mt-8 fade-in" itemScope itemType="https://schema.org/ItemList">
              <h3 className="text-lg sm:text-xl font-semibold mb-4" itemProp="name">My Books(Computer Science စာအုပ်များ)</h3>
              <meta itemProp="description" content="Free Computer Science books in Myanmar language" />
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {books.map((book, index) => (
                  <article 
                    key={book.slug} 
                    className="flex flex-col items-center"
                    itemScope 
                    itemType="https://schema.org/Book"
                    itemProp="itemListElement"
                  >
                    <meta itemProp="position" content={String(index + 1)} />
                    <meta itemProp="inLanguage" content="my" />
                    <meta itemProp="bookFormat" content="EBook" />
                    <meta itemProp="isAccessibleForFree" content="true" />
                    <a 
                      href={book.downloadUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      itemProp="url"
                      aria-label={`Download ${book.title}`}
                    >
                      <img
                        src={book.coverSrc}
                        alt={`${book.title} - Free Computer Science book cover`}
                        className="w-32 h-44 sm:w-40 sm:h-56 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 border border-gray-300"
                        itemProp="image"
                        loading="lazy"
                      />
                    </a>
                    <h4 className="mt-2 text-sm sm:text-base font-medium text-center h-12 line-clamp-2" itemProp="name">{book.title}</h4>
                    <meta itemProp="author" content="Yan Naing Lin" />
                    <a
                      href={book.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 text-sm sm:text-base text-blue-600 hover:text-blue-800 font-medium"
                      aria-label={`Download ${book.title} PDF`}
                      download
                    >
                      Download
                    </a>
                  </article>
                ))}
              </div>
            </section>
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
