import styles from "../styles/Testimonials.module.css";
import TestimonialCard from "./TestimonialCard";
const testimonials = [
  {
    name: "Prem M",
    role: "Student",
    location: "Gittam University",
    image: "/images/prem.jpg",
    message:
      "I had the pleasure of exploring Elearning, a website that provides an extensive range of courses on various tech-related topics. I highly recommend checking out Elearning!",
    rating: 5,
  },
  {
    name: "Vidhya",
    role: "Computer Systems Engineer",
    location: "Zimbabwe",
    image: "/images/vidhya.jpg",
    message:
      "Thanks for your amazing programming tutorial channel! The teaching style is outstanding, and the real-world examples are truly impressive.",
    rating: 5,
  },
  {
    name: "Chiru",
    role: "Full Stack Web Developer",
    location: "Algeria",
    image: "/images/chiru.jpg",
    message:
      "Your content is special. The projects make it easy for beginners to create something meaningful!",
    rating: 5,
  },
  {
    name: "Niteesh",
    role: "Full Stack Developer",
    location: "Quarter Ltd.",
    image: "/images/niteesh.jpg",
    message:
      "The tutorials are exceptional. Real-world examples make it so much easier to understand complex programming topics!",
    rating: 5,
  },
];

const Comments = () => {
  return (
    <div>
      <h1 className={styles.header}>What Our Students Say</h1>
      <div className={styles.testimonialGrid}>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Comments;