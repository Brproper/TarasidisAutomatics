import "./MeetOurTeam.css";
import AnimatedHeader from "./AnimatedHeader";
import FounderImg from "../assets/imgs/Founder.png";
import ContentDirectorImg from "../assets/imgs/ContentDirector.png";
import CTOImg from "../assets/imgs/CTO.png";
const teamMembers = [
  {
    name: "Michail",
    role: "Founder & CEO ",
    image: FounderImg,
  },
  {
    name: "George",
    role: "CTO",
    image: CTOImg,
  },
  {
    name: "Tsampikos",
    role: "Content/Marketing\nDirector",
    image: ContentDirectorImg,
  },
];

export default function MeetOurTeam() {
  return (
    <section className="meet-our-team-section" id="meetOurTeam">
      <div className="team-header-container">
        <AnimatedHeader
          as="h2"
          className="team-section-heading"
          style={{
            "--typing-width": "12ch",
            "--typing-duration": "1.8s",
            "--typing-steps": "12",
            "--typing-cursor-color": "var(--highlight-color)",
          }}
        >
          Meet Our Team
        </AnimatedHeader>
      </div>

      <div className="team-cards-container">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <div className="team-card-image-wrapper">
              <img
                src={member.image}
                alt={member.name}
                className="team-card-image"
                loading="lazy"
              />
            </div>
            <div className="team-card-content">
              <h3 className="team-card-name">{member.name}</h3>
              <p className="team-card-role">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
