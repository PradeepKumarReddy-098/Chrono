// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimeLineCard = props => {
  const {eachItem} = props
  return (
    <div className="projectView-container">
      <img src={eachItem.imageUrl} alt="project" className="image" />
      <div className="title-duration">
        <h2>{eachItem.projectTitle}</h2>
        <div className="image-time">
          <AiFillCalendar />
          <p>{eachItem.duration}</p>
        </div>
      </div>
      <p>{eachItem.description}</p>
      <a href={eachItem.projectUrl} target="blank" className="link">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimeLineCard
