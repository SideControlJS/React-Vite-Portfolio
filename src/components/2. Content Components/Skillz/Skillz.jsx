import React, { useEffect } from 'react';
import './Skillz.css';
import WOW from 'wow.js';
import { categories } from '../../../myInfo';

const Skillz = () => {
    useEffect(() => {
        new WOW().init();
    }, []);

    return (
        <section id="Skills" className="skills section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title">
                            <h3 className="wow zoomIn" data-wow-delay=".2s">
                                Skills
                            </h3>
                            <h2 className="wow fadeInUp" data-wow-delay=".4s">
                            Full Stack Web Development & Lighting Controls Expertise
                            </h2>
                            <p className="wow fadeInUp" data-wow-delay=".6s">
                            Crafting Innovative Solutions with Cutting-Edge Web Technologies and Advanced Lighting Control Systems.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {categories.map((category) => (
                        <div
                            key={category.name}
                            className="col-lg-4 col-md-6 col-12"
                        >
                            <div
                                className="single-feature wow fadeInUp"
                                data-wow-delay=".2s"
                            >
                                <div className="skill-icons">
                                    {category.skills.map((skill, index) => {
                                        const iconClasses = skill.icon.split(' ');
                                        return (
                                            <i
                                                key={index}
                                                className={iconClasses.join(' ')}
                                                title={skill.title}
                                            ></i>
                                        );
                                    })}
                                </div>
                                <h3>{category.title}</h3>
                                <p>{category.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skillz;
