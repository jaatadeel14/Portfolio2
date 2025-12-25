import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import java from "../../public/java.png";
import javascript from "../../public/javascript.png";
import oracle from "../../public/oracle.png";
import spring from "../../public/spring.png";
import springBoot from "../../public/springBoot.jpg";
function Experiance() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "MongoDB",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: java,
      name: "Java",
    },
    {
      id: 4,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 5,
      logo: oracle,
      name: "Oracle",
    },
    {
      id: 6,
      logo: spring,
      name: "Spring",
    },
    {
      id: 7,
      logo: springBoot,
      name: "Spring Boot",
    },
  ];
  return (
    <div
      name="Experiance"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 animate-fade-in"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5 dark:text-white">Experience & Technologies</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
         Continuously learning and expanding expertise in these technologies through hands-on projects and professional experience. 
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 my-8">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className="flex flex-col items-center justify-center border-2 border-gray-200 dark:border-gray-700 rounded-2xl md:w-[200px] md:h-[200px] shadow-md p-4 cursor-pointer hover:scale-110 duration-300 bg-white dark:bg-gray-800 transition-all hover:shadow-xl"
              key={id}
            >
              <img src={logo} className="w-[120px] h-[120px] rounded-lg object-contain mb-3" alt={name} />
              <div>
                <div className="text-center font-semibold dark:text-white">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance;



// ok hogaya 