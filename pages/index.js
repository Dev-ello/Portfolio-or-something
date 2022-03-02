import Card from "components/card/Card";
import ContactForm from "components/ContactForm/ContactForm";
import Hero from "components/hero/Hero";
import Layout from "components/layout/Layout";
import SectionBreak from "components/SectionBreak/SectionBreak";

function Home() {
  return (
    <Layout>
      <Hero
        heading="AAAAAAAAAAAAAAAAA"
        subHeading="This is a thing about uh... I dont exactly know but its about a thing"
        buttonText="Learn more"
        bgImage="/EEEE.png"
      />
      <SectionBreak />
      <h2>Projects</h2>
      <div className="flex justify-space-evenly flex-wrap">
        <Card
          image="/a.png"
          alt="Project Image"
          title="are you smarter than me?"
          text="Im very stupid. Lets see if you are smarter than me with this test! Chances are you will destroy me. if you get all of em right you are smarter than me"
          buttonText="Learn More"
          buttonLink="https://are-you-smarter-than-a-5th-grader.devonsee.repl.co/"
        />

        <Card
          image="/E.png"
          alt="Project Image"
          title="Im not very proud of this one"
          text="This one im not so proud of.... but i will take my chances and put it up here. put in two numbers and watch what you get with the pythagorean theorem or something"
          buttonText="Learn More"
          buttonLink="https://pythagorean-theorem.devonsee.repl.co/"
        />

        <Card
          image="/project.jpeg"
          alt="Project Image"
          title="Cool Thing"
          text="An ai driven application that helps people study and memorize faster! Artificial intelligence automatically figures out what study point you need more help memorizing and times study cues to help information stick."
          buttonText="Learn More"
          buttonLink=""
        />
      </div>

      <SectionBreak />
      <h2>Contact</h2>
      <ContactForm />
    </Layout>
  );
}

export default Home;
