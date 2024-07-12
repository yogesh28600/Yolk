import { useGSAP } from "@gsap/react";
import "./AboutTeam.css";
import gsap from "gsap";
import Employee from "../../types/Employee";
const TeamMember = (member: Employee) => {
  return (
    <div id="team">
      <div id="team-img-container"></div>
      <div id="team-info">
        <h1>{member.name}</h1>
        <h4>{member.designation}</h4>
      </div>
    </div>
  );
};
interface Props {
  employees: Employee[];
}
const AboutTeam = ({ employees }: Props) => {
  useGSAP(() => {
    gsap.from("#team", {
      y: "100%",
      duration: 0.5,
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#team-container",
        toggleActions: "restart none restart none",
      },
    });
  });
  return (
    <section id="about-team">
      <h1>Our Team</h1>
      <div id="team-container">
        {employees.map(({ id, name, designation }) => {
          return (
            <TeamMember
              key={id}
              name={name}
              designation={designation}
              id={id}
            />
          );
        })}
      </div>
    </section>
  );
};
export default AboutTeam;
