import { Link } from 'react-router-dom'

const TopbarLink = ({ icon, to, active, title }) => (
  <Link
    to={to}
    className={`${active ? 'bg-secondary/50 shadow-lg' : ''} group flex items-center justify-center rounded-lg bg-secondary px-5 py-2 text-primary transition-all duration-500 hover:bg-secondary/50 hover:shadow-lg`}
  >
    {icon}
    <span
      className={`font-poppins text-admin-nav-md px-2 font-medium transition-all duration-500 group-hover:bg-gradient group-hover:bg-clip-text group-hover:text-transparent ${active ? 'bg-gradient bg-clip-text text-transparent' : ''}`}
    >
      {title}
    </span>
  </Link>
)

export default TopbarLink
