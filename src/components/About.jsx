import React from 'react'

const About = () => {
  return (
    <div name="About" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
        <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
          Hello, I'm Adeel, a passionate Web developer with a keen eye for MERN
          Stack . With a background in IT, I strive to create impactful and
          visually stunning Software solutions that leave a lasting impression.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Education & Training
        </h1>
        <span>
          [The Spirit School/Computer Science] [High School] [2016/18] <br /> 
          [Pak Turk Maarif College/Pre Engineering][College] [2018,2020]<br /> 
          [Suleyman Demirel University/Computer Engineering] [University] [2021 Present]
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <span>
        <li>Proficient in HTML, CSS, JavaScript</li>
        <li>Experienced with React.js, Node.js, MongoDB</li>
        <li>Strong grasp of responsive web design and user interface principles</li>
        <li>Excellent problem-solving skills</li>
        <li>Effective communicator and collaborator</li>
        <li>Know more then 6 human languages (English,Turkish,Urdu,Hindi,Punjabi,Haryanvi)</li>
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Professional Experience
        </h1>
        <span>
        <h3 className='font-bold text-red-600'>Junior Front-End Developer, Example Study Blogs</h3>
        <p><em>January 2024 - June 2024</em></p>
        <p>Developed and maintained web applications using React.js and JavaScript. Collaborated with the design team to create responsive and user-friendly interfaces. Assisted in troubleshooting and debugging issues in existing applications.It is university Class project</p>
        <h3  className='font-bold text-red-600'>Web Development Intern, Hype Web Co.</h3>
        <p><em>July 2024 - Present</em></p>
        <p>Contributed to the development of the company's main website using HTML, CSS, and JavaScript. Gained hands-on experience in implementing responsive design and ensuring cross-browser compatibility. Participated in code reviews and team meetings.</p>
       
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Achievements & Awards
        </h1>
        <span>
        <h3>Excellence High Achiever Award ( <em className='text-red-600'>Pakturk Marif College, 2019</em> )</h3> 
        <h3>Turkish Language C1 Certificate (<em className='text-red-600'>Suleyman Demirel University, 2021</em> )</h3>
      
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Mission Statement
        </h1>
        <p>
          My mission is to leverage my skills and creativity to deliver
          innovative [Your Field] solutions that exceed client expectations and
          contribute positively to the digital landscape. I am committed to
          continuous learning and growth, always seeking new challenges and
          opportunities to expand my horizons.
        </p>
      </div>

     </div>
  )
}

export default About