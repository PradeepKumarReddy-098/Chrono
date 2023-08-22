// Write your code here
import {Chrono} from 'react-chrono'
import CourseTimeLineCard from '../CourseTimelineCard'
import ProjectTimeLineCard from '../ProjectTimelineCard'

import './index.css'

const TimeLineView = props => {
  const {timelineItemsList} = props
  return (
    <div className="timelineview-container">
      <h1 className="main-heading">MY JOURNEY OF CCBP 4.0</h1>
      <div>
        <Chrono items={timelineItemsList} mode="VERTICAL_ALTERNATING">
          {timelineItemsList.map(eachItem => {
            if (eachItem.categoryId === 'COURSE') {
              return (
                <CourseTimeLineCard key={eachItem.id} eachItem={eachItem} />
              )
            }
            return <ProjectTimeLineCard key={eachItem.id} eachItem={eachItem} />
          })}
        </Chrono>
      </div>
    </div>
  )
}

export default TimeLineView
