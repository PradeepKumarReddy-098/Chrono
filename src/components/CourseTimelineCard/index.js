// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimeLineCard = props => {
  const {eachItem} = props
  return (
    <div className="courseview-container">
      <div className="title-duration-container">
        <h3 className="course-text">{eachItem.courseTitle}</h3>
        <div className="clock-title">
          <AiFillClockCircle />
          <p className="duration">{eachItem.duration}</p>
        </div>
      </div>
      <p>{eachItem.description}</p>
      <ul>
        {eachItem.tagsList.map(tag => (
          <li key={tag.id}>
            <p className="tags">{tag.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimeLineCard
