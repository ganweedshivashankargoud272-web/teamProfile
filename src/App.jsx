import TeamMemberCard from './components/TeamMemberCard'

import './App.css'

const userDetailsList = [
  {
    uniqueNo: 1,
    name: 'Sarah Johnson',
    role: 'Frontend Developer',
    imageUrl:
      'https://s3.ap-south-1.amazonaws.com/new-assets.ccbp.in/frontend/loading-data/niat_react_js/niat_coding_questions/person1.jpg',
    department: 'Engineering',
  },
  {
    uniqueNo: 2,
    name: 'Michael Chen',
    role: 'UI/UX Designer',
    imageUrl:
      'https://s3.ap-south-1.amazonaws.com/new-assets.ccbp.in/frontend/loading-data/niat_react_js/niat_coding_questions/person2.jpg',
    department: 'Design',
  },
]

const App = () => (
  <div className="team-app-container">
    <div className="team-content-container">
      <h1 className="team-heading">Our Team</h1>
      <p className="team-description">
        Meet the talented professionals who make our company great Each member
        brings unique skills and expertise to deliver oustanding results.
      </p>

      <div className="team-members-container">
        {userDetailsList.map(eachItem => (
          <TeamMemberCard userDetals={eachItem} key={eachItem.uniqueNo} />
        ))}
      </div>
    </div>
  </div>
)

export default App
