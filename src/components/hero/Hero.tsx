import "./Hero.css";
import HeroImg from "../../assets/images/hero-img.jpg";

type HeroType = {
  headline: string;
  subheadline?: string;
  image?: string;
};
const Hero = (props: HeroType) => {
  const defaultImage = HeroImg;
  return (
    <section id="hero">
      <div id="hero-content-container">
        <h1 id="heading">{props.headline}</h1>
        <p>{props.subheadline}</p>
      </div>
      <div id="hero-img-container">
        <img
          src={props.image ? props.image : defaultImage}
          alt=""
          id="hero-img"
        />
      </div>
    </section>
  );
};

export default Hero;
