import { useGSAP } from "@gsap/react";
import "./AboutTeam.css";
import gsap from "gsap";
import Employee from "../../types/Employee";
import { useStore } from "../../stores/store";
interface TeamMemberProps {
  employee: Employee;
}
const TeamMember = ({ employee }: TeamMemberProps) => {
  return (
    <div id="team">
      <div id="team-img-container"></div>
      <div id="team-info">
        <h1>{employee.name}</h1>
        <h4>{employee.designation}</h4>
      </div>
    </div>
  );
};
const AboutTeam = () => {
  const { teamStore } = useStore();
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
        {teamStore.teamMembers.map((employee) => {
          return <TeamMember key={employee.id} employee={employee} />;
        })}
      </div>
    </section>
  );
};
export default AboutTeam;
