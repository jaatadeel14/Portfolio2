import React from 'react'     // This is the code that which is used for the code in the dependencies over load and in the code file

const sectionTitle = (children) => (
  <h2 className="font-display mb-4 flex items-center gap-3 text-xl font-bold text-stone-900 dark:text-white md:text-2xl">
    <span className="h-1 w-8 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500" />
    {children}
  </h2>
)

const About = () => {
  return (
    <div name="About" className='max-w-screen-2xl container mx-auto px-4 py-12 md:px-20 md:py-20'>
        <div className="animate-fade-in">
        <div className="mb-10">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">About</p>
          <h1 className="font-display text-3xl font-bold tracking-tight text-stone-900 dark:text-white md:text-4xl">Background &amp; focus</h1>
        </div>
        <p className="mb-10 max-w-3xl text-base leading-relaxed text-stone-600 dark:text-slate-400">
          Hello, I&apos;m Adeel, a passionate Computer Engineer with expertise in full-stack development and the MERN Stack. With a strong foundation in computer engineering and a Bachelor&apos;s degree from Suleyman Demirel University, I strive to create impactful and
          innovative software solutions that leave a lasting impression. My international experience through the Erasmus+ program has further enhanced my professional skills and cross-cultural collaboration abilities.
        </p>

        {sectionTitle('Education & Training')}
        <div className="mb-10 space-y-3 rounded-2xl border border-stone-200/80 bg-white/60 p-6 text-stone-700 shadow-card backdrop-blur-sm dark:border-slate-800/80 dark:bg-slate-900/40 dark:text-slate-300">
          <p><strong className="text-stone-900 dark:text-white">The Spirit School</strong> / Computer Science | High School | 2016-2018</p>
          <p><strong className="text-stone-900 dark:text-white">Pak Turk Maarif College</strong> / Pre Engineering | College | 2018-2020</p>
          <p><strong className="text-stone-900 dark:text-white">Suleyman Demirel University</strong> / <span className="font-semibold text-emerald-600 dark:text-emerald-400">Bachelor of Computer Engineering</span> | University | 2021-2025 | <span className="font-semibold text-emerald-600 dark:text-emerald-400">Graduated 2025</span></p>
        </div>

        {sectionTitle('Skills & Expertise')}
        <ul className="mb-10 space-y-2 rounded-2xl border border-stone-200/80 bg-white/60 p-6 list-disc pl-6 text-stone-700 shadow-card dark:border-slate-800/80 dark:bg-slate-900/40 dark:text-slate-300">
        <li>Proficient in HTML, CSS, JavaScript</li>
        <li>Experienced with React.js, Node.js, MongoDB</li>
        <li>Strong grasp of responsive web design and user interface principles</li>
        <li>Excellent problem-solving skills</li>
        <li>Effective communicator and collaborator</li>
        <li>Multilingual: Fluent in 6+ languages (English, Turkish, Urdu, Hindi, Punjabi, Haryanvi)</li>
        </ul>

        {sectionTitle('Professional Experience')}
        <div className="mb-10 space-y-4">
          <div className="group rounded-2xl border border-stone-200/80 bg-white/60 p-5 shadow-card transition-all hover:border-emerald-500/30 hover:shadow-glow-sm dark:border-slate-800/80 dark:bg-slate-900/40">
            <h3 className='mb-1 font-display text-lg font-bold text-rose-600 dark:text-rose-400'>Erasmus+ Internship, Universitatea din Oradea</h3>
            <p className='mb-2 text-sm italic text-stone-500 dark:text-slate-500'>Oradea, Romania | 22 Sep 2025 – 22 Dec 2025</p>
            <p className="text-stone-600 dark:text-slate-400">Participated in an international internship program focusing on professional skills development and cross-cultural collaboration. Gained valuable experience in an international academic environment, enhancing technical competencies and professional communication skills.</p>
          </div>
          <div className="group rounded-2xl border border-stone-200/80 bg-white/60 p-5 shadow-card transition-all hover:border-emerald-500/30 hover:shadow-glow-sm dark:border-slate-800/80 dark:bg-slate-900/40">
            <h3 className='mb-1 font-display text-lg font-bold text-rose-600 dark:text-rose-400'>Junior Front-End Developer, Example Study Blogs</h3>
            <p className='mb-2 text-sm italic text-stone-500 dark:text-slate-500'>January 2024 - June 2024</p>
            <p className="text-stone-600 dark:text-slate-400">Developed and maintained web applications using React.js and JavaScript. Collaborated with the design team to create responsive and user-friendly interfaces. Assisted in troubleshooting and debugging issues in existing applications. University class project.</p>
          </div>
          <div className="group rounded-2xl border border-stone-200/80 bg-white/60 p-5 shadow-card transition-all hover:border-emerald-500/30 hover:shadow-glow-sm dark:border-slate-800/80 dark:bg-slate-900/40">
            <h3  className='mb-1 font-display text-lg font-bold text-rose-600 dark:text-rose-400'>Web Development Intern, Hype Web Co.</h3>
            <p className='mb-2 text-sm italic text-stone-500 dark:text-slate-500'>July 2024 - Present</p>
            <p className="text-stone-600 dark:text-slate-400">Contributed to the development of the company&apos;s main website using HTML, CSS, and JavaScript. Gained hands-on experience in implementing responsive design and ensuring cross-browser compatibility. Participated in code reviews and team meetings.</p>
          </div>
        </div>

        {sectionTitle('Projects')}
        <div className="mb-10 space-y-4">
          <div className="group rounded-2xl border border-stone-200/80 bg-white/60 p-5 shadow-card transition-all hover:border-emerald-500/30 dark:border-slate-800/80 dark:bg-slate-900/40">
            <h3 className='mb-2 font-display text-lg font-bold text-rose-600 dark:text-rose-400'>UX Service Website</h3>
            <p className="text-stone-600 dark:text-slate-400">UXService designs seamless, user-centric digital experiences for websites and applications. We blend creativity with functionality, helping businesses deliver intuitive, engaging, and impactful solutions that users love. Crafting excellence, one experience at a time.</p>
          </div>
          <div className="group rounded-2xl border border-stone-200/80 bg-white/60 p-5 shadow-card transition-all hover:border-emerald-500/30 dark:border-slate-800/80 dark:bg-slate-900/40">
            <h3 className='mb-2 font-display text-lg font-bold text-rose-600 dark:text-rose-400'>Temperature and Humidity Measurement System</h3>
            <p className="text-stone-600 dark:text-slate-400">Accurately monitor temperature and humidity with our reliable, user-friendly sensor system. Designed for precision and efficiency, it ensures seamless environmental tracking for homes, industries, and smart applications. Stay informed, stay comfortable.</p>
          </div>
        </div>

        {sectionTitle('Achievements & Awards')}
        <div className="mb-10 space-y-3">
          <div className="rounded-2xl border border-stone-200/80 bg-white/60 p-5 shadow-card dark:border-slate-800/80 dark:bg-slate-900/40">
            <h3 className="font-semibold text-stone-900 dark:text-white">Erasmus+ Internship Program</h3>
            <p className="text-sm text-stone-500 dark:text-slate-500"><em>Universitatea din Oradea, Romania | 22 Sep 2025 – 22 Dec 2025</em></p>
            <p className="mt-2 text-stone-600 dark:text-slate-400">Successfully completed an international internship program, demonstrating adaptability, cross-cultural communication skills, and professional growth in an international academic environment.</p>
          </div>
          <div className="rounded-2xl border border-stone-200/80 bg-white/60 p-5 shadow-card dark:border-slate-800/80 dark:bg-slate-900/40">
            <h3 className="font-semibold text-stone-900 dark:text-white">Excellence High Achiever Award</h3>
            <p className="text-sm text-stone-500 dark:text-slate-500"><em className='text-rose-600 dark:text-rose-400'>Pakturk Maarif College, 2019</em></p>
          </div>
          <div className="rounded-2xl border border-stone-200/80 bg-white/60 p-5 shadow-card dark:border-slate-800/80 dark:bg-slate-900/40">
            <h3 className="font-semibold text-stone-900 dark:text-white">Turkish Language C1 Certificate</h3>
            <p className="text-sm text-stone-500 dark:text-slate-500"><em className='text-rose-600 dark:text-rose-400'>Suleyman Demirel University, 2021</em></p>
          </div>
        </div>

        {sectionTitle('Mission Statement')}
        <p className="max-w-3xl rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 p-6 leading-relaxed text-stone-600 dark:text-slate-400">
          My mission is to leverage my computer engineering expertise and creativity to deliver
          innovative software solutions that exceed client expectations and
          contribute positively to the digital landscape. I am committed to
          continuous learning and growth, always seeking new challenges and
          opportunities to expand my horizons. Through international collaboration and professional development, I aim to make a meaningful impact in the technology industry.
        </p>
      </div>

     </div>
  )
}

export default About
