// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import gsap from "gsap";
// import oldman from "../../assets/images/oldman.jpg";
// const ValueProposition = () => {
//   gsap.registerPlugin(ScrollTrigger);
//   useGSAP(() => {
//     gsap.from("#img-container ", {
//       x: "-200%",
//       duration: 1,
//       scrollTrigger: {
//         trigger: "#value-proposition",
//         toggleActions: "restart none restart none",
//         end: "90%",
//       },
//     });
//     gsap.from("#content-container ", {
//       x: "200%",
//       duration: 1,
//       scrollTrigger: {
//         trigger: "#value-proposition",
//         toggleActions: "restart none restart none",
//         end: "90%",
//       },
//     });
//   });
//   return (
//     <section id="value-proposition">
//       <div id="img-container" className="container">
//         <img src={oldman} alt="" />
//       </div>
//       <div id="content-container" className="container">
//         <div id="content">
//           <h3>"Yolk: Where Adventure Meets Affordability"</h3>
//           <p>
//             At Yolk, we believe that everyone deserves to embark on thrilling
//             adventures through the pages of comic books. Our unique value lies
//             in:
//           </p>
//           <ul>
//             <li>
//               <span>Affordability</span>: Yolk's comic books are
//               budget-friendly, making them accessible to all.
//             </li>
//             <li>
//               <span>Local Availability</span>: Find our comics conveniently at
//               your neighborhood shops.
//             </li>
//             <li>
//               <span>Old-Fashioned Charm</span>: We blend nostalgia with modern
//               storytelling, creating a delightful reading experience for
//               seniors.
//             </li>
//           </ul>
//           <p>
//             Join us at Yolk and explore a world of bravery, one comic book at a
//             time! 📚🥚😊
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };
// export default ValueProposition;

import { Container, Row, Col } from "react-bootstrap";
import { useStore } from "../../stores/store";

const ValueProposition = () => {
  const { valuePropositionStore } = useStore();
  return (
    <Container fluid id="value-proposition" className="p-0 py-5 mt-5">
      {valuePropositionStore.values.map((value, idx) => {
        return (
          <Row key={value.id} className="row-cols-1 row-cols-sm-2 mt-5">
            <Col className="d-flex align-items-center justify-content-center p-0">
              {idx % 2 === 0 ? (
                <img
                  src={value.image}
                  width={"80%"}
                  alt=""
                  className="rounded img-fluid"
                />
              ) : (
                <Container className="p-0" fluid>
                  <Row>
                    <Col className="col-8 offset-2">
                      <p>{value.context}</p>
                    </Col>
                  </Row>
                </Container>
              )}
            </Col>
            <Col className="d-flex align-items-center justify-content-center p-0">
              {idx % 2 === 0 ? (
                <Container className="p-0" fluid>
                  <Row>
                    <Col className="col-8 offset-2">
                      <p>{value.context}</p>
                    </Col>
                  </Row>
                </Container>
              ) : (
                <img
                  src={value.image}
                  width={"80%"}
                  alt=""
                  className="rounded img-fluid"
                />
              )}
            </Col>
          </Row>
        );
      })}
    </Container>
  );
};

export default ValueProposition;
