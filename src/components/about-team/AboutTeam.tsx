import Employee from "../../types/Employee";
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import { useStore } from "../../stores/store";
interface TeamMemberProps {
  employee: Employee;
}
const TeamMember = ({ employee }: TeamMemberProps) => {
  return (
    <Col>
      <Card>
        <img src={employee.image} alt="" />
        <CardBody>
          <CardTitle>{employee.name}</CardTitle>
          <CardText>{employee.designation}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

const AboutTeam = () => {
  const { teamStore } = useStore();
  return (
    <Container fluid className="my-5">
      <h1 className="text-center mb-5">Our Team</h1>
      <Container fluid className="">
        <Row className="row-cols-1 row-cols-md-2 row-cols-lg-4 d-flex align-items-center justify-content-center">
          {teamStore.teamMembers.map((member) => {
            return <TeamMember key={member.id} employee={member} />;
          })}
        </Row>
      </Container>
    </Container>
  );
};

export default AboutTeam;
