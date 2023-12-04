import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import './Achievement.css';
import { achievements } from '../../../myInfo';

// changes included in this snippet: extracted AchievementItem subcomponent, simplified useEffect hook, and added useInView hook, moved ref to div element, and added isVisible prop to AchievementItem subcomponent
const AchievementItem = ({ info, isVisible }) => (
  <div className="col-lg-4 col-md-4 col-12">
    <div className="single-achievement">
      {isVisible && (
        <h3 className="counter">
          <CountUp start={0} end={info.value} duration={4} separator="," />
          <span>{info.unit}</span>
        </h3>
      )}
      <p>{info.word}</p>
    </div>
  </div>
);

const Achievement = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    setIsVisible(inView);
  }, [inView]);

  return (
    <section className="our-achievement section">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1 col-md-12 col-12">
            <div className="title">
              <h2>“The way to succeed is to double your failure rate.”</h2>
              <p>—Thomas J. Watson, pioneer in the development computing equipment for IBM.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 offset-lg-2 col-md-12 col-12">
            <div className="row" ref={ref}>
              {achievements.map((info, index) => (
                <AchievementItem key={index} info={info} isVisible={isVisible} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievement;

