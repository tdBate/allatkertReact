import BevezetoResz from "./components/BevezetoResz";
import Fejlec from "./components/Fejlec"
import "bootstrap/dist/css/bootstrap.css";


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
        </div>
      </div>

    </>
  )
}

export default App
