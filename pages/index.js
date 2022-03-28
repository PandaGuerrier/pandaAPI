import {Button} from './components/Button.js'
import {Header} from './components/Header.js'
import style from './css/index.module.css'

function SousHeader({ name }) {
  return <h2 className={style.sousTitle}>{name}</h2>
}

export default function HomePage() {

  return (
    <div>
      <Header />
      <h1 className={style.title}> Panda_Guerrier</h1>
      <SousHeader name="Développeur JS"/>
      <Button />

    </div>
  )

  
}

export async function getStaticProps() {

  return {props: {}}

}