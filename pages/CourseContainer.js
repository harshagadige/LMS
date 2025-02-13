import styles from '../styles/CourseContainer.module.css';
import Navbar from './Navbar';
import Footer from './Footer';
import CourseContainerCode from './CoursdeContainerCode';

const CourseContainer=()=>{
    return (
        <>
        <Navbar/>
        
       <CourseContainerCode/>
    <Footer/>
        </>
        
    )
}
export default CourseContainer;