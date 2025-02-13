import React from "react";
import styles from "../styles/Testimonials.module.css"; // Assuming you're using the same styles

const TestimonialCard = ({ name, role, location, image, message, rating }) => {
  return (
    <div className={styles.testimonialCard}>
      <div className={styles.testimonialHeader}>
        <img src={image} alt={`${name}'s profile`} className={styles.profileImage} />
        <div className={styles.testimonialInfo}>
          <h3 className={styles.testimonialName}>{name}</h3>
          <p className={styles.testimonialRole}>{role}</p>
          <p className={styles.testimonialLocation}>{location}</p>
        </div>
      </div>
      <div className={styles.testimonialMessage}>
        <p>{message}</p>
      </div>
      <div className={styles.testimonialRating}>
        {"⭐".repeat(rating)} {/* Displaying rating as stars */}
      </div>
    </div>
  );
};

export default TestimonialCard;
