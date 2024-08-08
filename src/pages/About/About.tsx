import styles from '@/pages/About/About.module.css';

const About = () => {
  const data = {
    name: 'Ara Stepanyan',
    role: 'Frontend Developer',
    location: 'Yerevan',
    bio: 'I am a skilled developer capable of creating client-side websites. I am always eager to learn new technologies and languages. My technical stack includes C, C++, Docker-Compose, JavaScript, TypeScript, React, Redux toolkit, vite, webpack. I have completed the basic projects at 42 yerevan , and now student at rs school.',
    contributions: 'frontend project',
    github: 'https://github.com/arastepa',
  };

  return (
    <div className={styles.container}>
      <h1>{data.name}</h1>
      <p>
        <strong>role</strong> {data.role}
      </p>
      <p>
        <strong>location</strong> {data.location}
      </p>
      <p>
        <strong>about me </strong>
        {data.bio}
      </p>
      <p>
        <strong>contribution </strong>
        {data.contributions}
      </p>
    </div>
  );
};

export default About;
