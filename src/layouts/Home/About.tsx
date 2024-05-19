import { FC } from "react";

const About: FC = () => {
  return (
    <section className="flex justify-center py-4 bg-secondary">
      <div className="px-4">
        <h2 className="text-5xl text-center pb-4">About me</h2>
        <div className="prose dark:prose-invert text-center">
          <span>
            Hello! My name is Samuel.
            <br />
          </span>
          <span>
            I&apos;m a Gameplay, Tools and Backend Engineer from Sweden who
            enjoys creating games.{" "}
          </span>
          <span>
            In my free time, I like to cook and make/learn music.
            <br />
            <br />
          </span>
          <span>
            I&apos;m always looking to learn new things and expand my knowledge
            in game development.{" "}
          </span>
          <span>
            I&apos;m fascinated by the constantly evolving technology in this
            field and I&apos;m always eager to stay on top of the latest trends
            and techniques.
          </span>
        </div>
      </div>
    </section>
  );
};

export default About;
