import React from 'react'
import useCourseStore from '../app/courseStore'
import { shallow } from 'zustand/shallow';

const CourseSegment = ({courses,removeCourse,toggleCourseStatus})=>{
    return (
        <div>
            <span>
                <input onChange={()=>toggleCourseStatus(courses.id)} checked={courses.completed} type="checkbox" />
            </span>
            <span style={{ color:`${courses.completed === true ? "green":"white"}`}}>
                {courses.title}
            </span>
            <button onClick={removeCourse}>
                delete
            </button>
        </div>
    )
}
const CourseList = () => {

    const courses = useCourseStore((state)=>state.courses);
    const removeCourse = useCourseStore((state)=>state.removeCourse);
    const toggleCourseStatus = useCourseStore((state)=>state.toggleCourseStatus);
  return (
    <>
    <div>
        {
            courses && courses.map((courses,i)=>{
                return <CourseSegment key={i} courses={courses} removeCourse={removeCourse} toggleCourseStatus={toggleCourseStatus}/>
            })
        }
    </div>
    </>
  )
}

export default CourseList