import Link from 'next/link';
import styles from '../styles/CourseContainer.module.css';


const CourseContainerCode=()=>{
    return(
        <div>
    <div className={styles.courseContainer}>

  {/* Card 1 */}
  <a href="/HTMLPage">
  <div className={styles.courseCard}>
    <img className={styles.imageElement} src="https://cdn3.vectorstock.com/i/1000x1000/04/72/html-code-vector-29320472.jpg" alt="Course Image" />
    <h3 className={styles.coursecardh3}>HTML</h3>
    <div className="rating">★★★★☆</div>
    <p>
      ₹500 <s>₹999</s>
    </p>
    <p>5 Students | 4 Lectures</p>
  </div>
  </a>
  {/* Card 2 */}
  <a href='/CSSPage' className={styles.courseCard}>
    <img className={styles.imageElement} src="https://cdn.mos.cms.futurecdn.net/Vp9WvV7YKdH4k8sKRePcE8.jpg" alt="Course Image" />
    <h3 className={styles.coursecardh3}>CSS</h3>
    <div className="rating">★★★★☆</div>
    <p>
      ₹599 <s>₹999</s>
    </p>
    <p>2 Students | 3 Lectures</p>
  </a>
  {/* Card 3 */}
  <a href='/JAVAPAGE' className={styles.courseCard}>
    <img className={styles.imageElement} src="https://wallpapercave.com/wp/wp7250087.jpg" alt="Course Image" />
    <h3 className={styles.coursecardh3}>Java</h3>
    <div className="rating">★☆☆☆☆</div>
    <p>
      ₹799 <s>₹999</s>
    </p>
    <p>1 Student | 3 Lectures</p>
  </a>
  {/* Card 4 */}
  <a href='/DSPage' className={styles.courseCard}>
    <img className={styles.imageElement} src="https://media.geeksforgeeks.org/wp-content/uploads/20230627113746/DSA-full-form-660.png" alt="Course Image" />
    <h3 className={styles.coursecardh3}>Data Structures &amp; Algorithms</h3>
    <div className="rating">★★★★☆</div>
    <p className="badge">700</p>
    <p>15 Students | 7 Lectures</p>
  </a>
  <a href='/REACTPage' className={styles.courseCard}>
    <img className={styles.imageElement} src="https://miro.medium.com/v2/resize:fit:1100/format:webp/0*4HxmoUyeXbMQDOtu.png" alt="Course Image" />
    <h3 className={styles.coursecardh3}>REACT</h3>
    <div className="rating">★★★★☆</div>
    <p>
      ₹799 <s>₹999</s>
    </p>
    <p>7 Students | 4 Lectures</p>
  </a>
  <a href='/MERNSTACKpage' className={styles.courseCard}>
    <img className={styles.imageElement} src="https://www.weblineindia.com/wp-content/uploads/2016/12/mean-stack-1.jpg" alt="Course Image" />
    <h3 className={styles.coursecardh3}>FULL STACK</h3>
    <div className="rating">★★★★☆</div>
    <p>
      ₹800 <s>₹999</s>
    </p>
    <p>9 Students | 5 Lectures</p>
  </a>
</div>
    </div>
    )
}

export default CourseContainerCode