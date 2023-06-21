import { ChevronRightIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import styles from './header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to='/' className={styles.headerLink}>
        <div className={styles.logoSquare}>
          <ChevronRightIcon strokeWidth={4} size={21} color="#1a2336" />
        </div>
        <div className={styles.logoText}>
          BANCO <br/>
          PICHINCHA
        </div>
      </Link>
    </header>
  )
}
export default Header
