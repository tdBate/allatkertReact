import BevezetoResz from "./components/BevezetoResz";
import Fejlec from "./components/Fejlec"
import "bootstrap/dist/css/bootstrap.css";
import ListaCard from "./components/ListaCard";
import { elohelyek, nepszeruAllatok, taplalkozas } from "../data/data.ts"


function App() {

  return (
    <>
      <div className="container">
        <div className="row">
          <Fejlec></Fejlec>
          <BevezetoResz title="Mit érdemes tudni az állatkerti állatokról? ">
            <p> Az állatkertekben különböző földrészekről származó állatokkal találkozhatunk. Az állatokat fajuknak és természetes élőhelyüknek megfelelő körülmények között gondozzák. </p>
            <p> Az állatok életkora és testsúlya fajonként jelentősen eltérhet. Táplálkozásuk is különböző: vannak növényevők, húsevők és mindenevők. </p>
            <p> Egyes állatfajok veszélyeztetettek, ezért az állatkertek a természetvédelmi szemléletformálásban és egyes fajok megőrzésében is szerepet vállalhatnak. </p>
          </BevezetoResz>

          <ListaCard title="Élőhelyek" list={elohelyek} numbered={false}></ListaCard>
          <ListaCard title="Népszerű állatok" list={nepszeruAllatok} numbered={true}></ListaCard>
          <ListaCard title="Táplálkozás" list={taplalkozas} numbered={false}></ListaCard>
        </div>
      </div>

    </>
  )
}

export default App
