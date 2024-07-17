// import Nav from "../../components/navbar/Nav";
// import Hero from "../../components/hero/Hero";
// import ValueProposition from "../../components/value-proposition/ValueProposition";
// import CallToAction from "../../components/cta/CallToAction";
// import AboutTeam from "../../components/about-team/AboutTeam";
// import HeroImg from "../../assets/images/hero-img.jpg";
// import { useState } from "react";
// import TermsComp from "../../components/terms/TermsComp";
// import TermsOfService from "../../Data/TermsOfService";
// const LandingPage = () => {
//   const [openModal, setModal] = useState<boolean>(false);
//   const Headline = "Unleash Your Inner Hero: Yolk’s Affordable Comics Await!";
//   const Subheading = "Unleash Your Inner Hero: Yolk’s Affordable Comics Await!";
//   return (
//     <main className={openModal ? "disable-scroll" : ""}>
//       {openModal && <div className="overlay"></div>}
//       <Nav setModal={setModal} />
//       <Hero headline={Headline} subheadline={Subheading} image={HeroImg} />
//       {openModal && <TermsComp terms={TermsOfService} closeModal={setModal} />}
//       <ValueProposition />
//       <AboutTeam />
//       <CallToAction />
//     </main>
//   );
// };
// export default LandingPage;
import Container from "react-bootstrap/Container";
import Hero from "../../components/hero/Hero";
import ValueProposition from "../../components/value-proposition/ValueProposition";
import AboutTeam from "../../components/about-team/AboutTeam";

const LandingPage = () => {
  return (
    <Container className="m-0 p-0" fluid={true}>
      <Hero />
      <ValueProposition />
      <AboutTeam />
    </Container>
  );
};

export default LandingPage;
