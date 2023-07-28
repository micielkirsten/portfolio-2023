import React from 'react';
import WebFont from 'webfontloader';
import Card from './CardComp/Card';
WebFont.load({
    google: {
        families: ['League Spartan:400,700']
    }
});


const ProjectsPage = () => {
    return (
        <div className='container'>
            <Card />
            <Card />
            <Card />

        </div>
        
    );
};

export default ProjectsPage;