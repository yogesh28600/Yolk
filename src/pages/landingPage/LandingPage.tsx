import "./LandingPage.css";
import Nav from "../../components/navbar/Nav";
import Hero from "../../components/hero/Hero";
import ValueProposition from "../../components/value-proposition/ValueProposition";
import CallToAction from "../../components/cta/CallToAction";
import AboutTeam from "../../components/about-team/AboutTeam";
import team from "../../Data/team";
import HeroImg from "../../assets/images/hero-img.jpg";

const LandingPage = () => {
  const Headline = "Unleash Your Inner Hero: Yolk’s Affordable Comics Await!";
  const Subheading = "Unleash Your Inner Hero: Yolk’s Affordable Comics Await!";
  return (
    <>
      <Nav />
      <Hero headline={Headline} subheadline={Subheading} image={HeroImg} />
      <ValueProposition />
      <AboutTeam employees={team} />
      <CallToAction />
    </>
  );
};

export default LandingPage;
