import Link from "next/link"
import styles from '../styles/Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}> 
      <div className="contenedor">         
        <div>
        </div>
        <nav>
          <Link href="/">Inicio</Link>
          <Link href="/partidos">Partidos</Link>
          <Link href="/jugadores">Jugadores</Link>
          <Link href="/competencias">Competencias</Link>
        </nav>
        </div>
    </header>
  )
}

export default Header