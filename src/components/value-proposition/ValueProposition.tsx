import { useGSAP } from "@gsap/react";
import "./ValueProposition.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import oldman from "../../assets/images/oldman.jpg";
const ValueProposition = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from("#img-container ", {
      x: "-200%",
      duration: 1,
      scrollTrigger: {
        trigger: "#value-proposition",
        toggleActions: "restart none restart none",
        end: "90%",
      },
    });
    gsap.from("#content-container ", {
      x: "200%",
      duration: 1,
      scrollTrigger: {
        trigger: "#value-proposition",
        toggleActions: "restart none restart none",
        end: "90%",
      },
    });
  });
  return (
    <section id="value-proposition">
      <div id="img-container" className="container">
        <img src={oldman} alt="" />
      </div>
      <div id="content-container" className="container">
        <div id="content">
          <h3>"Yolk: Where Adventure Meets Affordability"</h3>
          <p>
            At Yolk, we believe that everyone deserves to embark on thrilling
            adventures through the pages of comic books. Our unique value lies
            in:
          </p>
          <ul>
            <li>
              <span>Affordability</span>: Yolk's comic books are
              budget-friendly, making them accessible to all.
            </li>
            <li>
              <span>Local Availability</span>: Find our comics conveniently at
              your neighborhood shops.
            </li>
            <li>
              <span>Old-Fashioned Charm</span>: We blend nostalgia with modern
              storytelling, creating a delightful reading experience for
              seniors.
            </li>
          </ul>
          <p>
            Join us at Yolk and explore a world of bravery, one comic book at a
            time! 📚🥚😊
          </p>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
