import { ChevronRightIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
      <Link to='/' className="header-link">
        <div className="logo-square">
          <ChevronRightIcon strokeWidth={4} size={21} color="#1a2336" />
        </div>
        <div className="logo-text">
          BANCO <br/>
          PICHINCHA
        </div>
      </Link>
    </header>
  )
}
export default Header
