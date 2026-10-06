import BevezetoResz from "./components/BevezetoResz";
import Fejlec from "./components/Fejlec"
import "bootstrap/dist/css/bootstrap.css";
import ListaCard from "./components/ListaCard";
import { allatKartyak, allatok, elohelyek, nepszeruAllatok, taplalkozas } from "./data/data.ts"
import AllatTabla from "./components/AllatTabla.tsx";
import { AllatCard } from "./components/AllatCard.tsx";
import { Lablec } from "./components/Lablec.tsx";
import { Kep } from "./components/Kep.tsx";


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

          <AllatTabla lista={allatok}></AllatTabla>

          {allatKartyak.map((item) => (
            <AllatCard lista={item}></AllatCard>
          ))}

          <BevezetoResz title="Amit érdemes megjegyezni">
            <ul>
              <li>Minden állatfajnak sajátos táplálkozási igényei vannak.</li>
              <li>Az állatok életkora és testsúlya fajonként, illetve egyedenként eltérhet.</li>
              <li>A veszélyeztetett fajok védelme fontos természetvédelmi feladat.</li>
              <li>Az állatkertekben az állatok gondozása mellett az ismeretterjesztés is fontos szerepet kap.</li>
              <li>Egy állat adatai többféle adattípust tartalmazhatnak: szöveget, számot, logikai értéket és tömböt.</li>
            </ul>
          </BevezetoResz>

          <Kep source="https://media.cntraveler.com/photos/53e2da95dddaa35c30f604ab/master/pass/toque-macaques-sri-lanka-H-Lansdown-Alamy.jpg"></Kep>

          <Lablec nev="Török Donát" datum={new Date()}></Lablec>
        </div>
      </div>

    </>
  )
}

export default App
