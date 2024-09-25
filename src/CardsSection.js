import React from 'react';
import Card from './Card';

const CardsSection = () => {
    return ( <
        section className = "cards" >
        <
        Card className = "cyan"
        title = "Supervisor"
        description = "Monitors activity to identify project roadblocks"
        imageSrc = "images/icon-supervisor.svg"
        imageAlt = "Supervisor icon" /
        >
        <
        Card className = "red"
        title = "Team Builder"
        description = "Scans our talent network to create the optimal team for your project"
        imageSrc = "images/icon-team-builder.svg"
        imageAlt = "Team Builder icon" /
        >
        <
        Card className = "orange"
        title = "Karma"
        description = "Regularly evaluates our talent to ensure quality"
        imageSrc = "images/icon-karma.svg"
        imageAlt = "Karma icon" /
        >
        <
        Card className = "blue"
        title = "Calculator"
        description = "Uses data from past projects to provide better delivery estimates"
        imageSrc = "images/icon-calculator.svg"
        imageAlt = "Calculator icon" /
        >
        <
        /section>
    );
};

export default CardsSection;
