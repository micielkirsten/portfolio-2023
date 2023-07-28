import React from 'react';
import WebFont from 'webfontloader';
WebFont.load({

    google: {
        families: ['League Spartan:400,700']
    }
});

const ExpPage = () => {
    const experiences = [
        {
            company: 'Rocket Companies',
            role: 'Software Engineer Intern',
            duration: 'May 2023 - End August 2023',
            description: 'Actively contributing to Angular-powered landing pages for mortgage loan applications, enhancing eligibility assessment and optimizing the user experience. Leveraging Postman to streamline API development and testing, enabling efficient creation, execution, and validation of HTTP requests and responses, ensuring the seamless integration and functionality of APIs within website projects. Assisting in gathering and analyzing user feedback to make data-driven optimizations, leading to a 15% increase in user engagement and a higher conversion rate among qualified leads.'
        },
        {
            company: 'The Agency',
            role: 'Full-Stack Engineer',
            duration: 'January 2023 - Present',
            description: 'Played a key role in the redesign of The Agency website, implementing strategic design elements to enhance its visual appeal and user experience, resulting in a 40% increase in client inquiries. Utilized Figma to create comprehensive design systems, including style guides, component libraries, and design templates, resulting in improved consistency and efficiency across multiple projects.'
        },
        {
            company: 'Grid Protection Alliance',
            role: 'Software Engineer Intern',
            duration: 'November 2022 - May 2023',
            description: 'Successfully developed and implemented key features for the Grid Protection Alliance software using advanced technologies such as Typescript and Redux, resulting in a 20% improvement in overall user efficiency. Designed and implemented scalable software solutions, collaborating with cross-functional Agile teams to exceed stakeholder expectations within project timelines. Co-led OpenSee front-end redesign, leveraging modern web technologies to boost performance, enhance user experience, and achieve a 35% increase in page load speed while improving overall functionality.'
        },
    ];
    return (
        <div style={{justifyContent: 'center',}}>
            <ul>
                {experiences.map((experience, index) => (
                    <li key={index} style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                            <h3 id='header-text'>
                                {experience.company}
                            </h3>
                            <p id='role-text' style={{ marginLeft: '20px', marginTop: '-15px' }}>
                                {experience.role}
                            </p>
                            <ul id='description-text'>
                                {experience.description.split('. ').map((item, itemIndex) => (
                                    <li key={itemIndex} id='description-text'>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <p id='duration-text'>{experience.duration}</p>
                    </li>
                ))}
                </ul>
        </div>
    );
};

export default ExpPage;