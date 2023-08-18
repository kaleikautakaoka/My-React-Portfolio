import React from 'react';
import reactPic from '../../assets/reactPic.jpg';

function About() {
  return (
    <section className="my-5">
      <div className="about" alt="profile Pic">
        <img src={reactPic} style={{ width: "80px", height: "80px" }} alt="cover" />
       
        <p>
        Sachi Takaoka
        </p>
        <p>
       My name is Sachi and I am a developer with a background in education. I am passionate about creating applications that are user friendly and accessible to all. I am a team player and am excited to collaborate with others to create applications that are both functional and aesthetically pleasing. I am excited to be a part of the future of software development.
        </p>
      </div>
    </section>
  );
}

export default About;
