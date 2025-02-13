// pages/faq.js

import { useState } from 'react';
import styles from '../styles/Faquestions.module.css';  // Import the styles from Faquestions.module.css

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main>
      <section className={styles.faqSection}> {/* Use the CSS class from the module */}
        <h1>Frequently Asked Questions</h1>

        {/* FAQ Items */}
        <div className={styles.faqItem}>
          <div className={styles.question} onClick={() => toggleAnswer(0)}>
            What is the difference between coding and programming?{' '}
            <span className={styles.toggleIcon}>{openIndex === 0 ? '-' : '+'}</span>
          </div>
          {openIndex === 0 && (
            <div className={styles.answer}>Coding is the process of writing code using a programming language (e.g., Python, JavaScript, C++). It involves translating logical instructions into a syntax that a machine can understand.</div>
          )}
        </div>

        <div className={styles.faqItem}>
          <div className={styles.question} onClick={() => toggleAnswer(1)}>
            What are HTML and CSS?{' '}
            <span className={styles.toggleIcon}>{openIndex === 1 ? '-' : '+'}</span>
          </div>
          {openIndex === 1 && (
            <div className={styles.answer}>HTML is the structure of a webpage. It defines the content and layout using elements like headings, paragraphs, images, and links.</div>
          )}
        </div>

        <div className={styles.faqItem}>
          <div className={styles.question} onClick={() => toggleAnswer(2)}>
            What's the difference between a designer and a developer?{' '}
            <span className={styles.toggleIcon}>{openIndex === 2 ? '-' : '+'}</span>
          </div>
          {openIndex === 2 && (
            <div className={styles.answer}>Both designers and developers play crucial roles in building websites and apps, but they focus on different aspects of the process.</div>
          )}
        </div>

        <div className={styles.faqItem}>
          <div className={styles.question} onClick={() => toggleAnswer(3)}>
            What computer program do people use to write code?{' '}
            <span className={styles.toggleIcon}>{openIndex === 3 ? '-' : '+'}</span>
          </div>
          {openIndex === 3 && (
            <div className={styles.answer}>Developers use code editors and IDEs (Integrated Development Environments) to write and manage their code. The best choice depends on the programming language and project type.</div>
          )}
        </div>
      </section>
    </main>
  );
}
