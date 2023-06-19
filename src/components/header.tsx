import { ChevronRightIcon } from 'lucide-react'

const Header = () => {
  return (
    <header className="header">
      <div className="logo-square">
        <ChevronRightIcon strokeWidth={4} size={21} color="#1a2336" />
      </div>
      <div className="logo-text">
        BANCO <br/>
        PICHINCHA
      </div>
    </header>
  )
}
export default Header
