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
      name: "HTML",
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
      className="max-w-screen-2xl container mx-auto px-4 py-12 md:px-20 md:py-20 animate-fade-in"
    >
      <div>
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">Experience</p>
        <h1 className="font-display mb-4 text-3xl font-bold tracking-tight text-stone-900 dark:text-white md:text-4xl">Technologies</h1>
        <p className="mb-8 max-w-2xl text-stone-600 dark:text-slate-400">
         Continuously learning and expanding expertise in these technologies through hands-on projects and professional experience.
        </p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-5 lg:grid-cols-4 xl:grid-cols-5">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className="group flex min-h-[160px] flex-col items-center justify-center rounded-2xl border border-stone-200/80 bg-white/60 p-4 text-center shadow-card backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-500/40 hover:shadow-glow-sm dark:border-slate-800/80 dark:bg-slate-900/50 md:min-h-[200px] md:max-w-[220px] md:justify-self-center"
              key={id}
            >
              <div className="mb-3 rounded-xl border border-stone-200/60 bg-stone-50/90 p-2 dark:border-slate-700 dark:bg-slate-800/40">
                <img src={logo} className="h-16 w-16 object-contain md:h-[100px] md:w-[100px]" alt={name} />
              </div>
              <div className="font-display text-sm font-semibold text-stone-900 dark:text-white md:text-base">{name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance;
