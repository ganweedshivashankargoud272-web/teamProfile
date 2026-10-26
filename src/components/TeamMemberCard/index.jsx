import './index.css'

const TeamMemberCard = props => {
  const {userDetals} = props
  const {name, role, imageUrl, department} = userDetals
  return (
    <li className="member-card">
      <img src={imageUrl} className="member-img" alt={name} />

      <div>
        <h1 className="member-name">{name}</h1>
        <p className="member-role">{role}</p>
        <p className="member-department">`Department: {department}`</p>
      </div>
    </li>
  )
}

export default TeamMemberCard
