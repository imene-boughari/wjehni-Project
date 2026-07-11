import { useState } from "react";
import "./styles/variables.css";
import Home from "./pages/Home/Home";
import FiliereSelectionPage from "./pages/FiliereSelectionPage/FiliereSelectionPage";
import MoyenneBacPage from "./pages/MoyenneBacPage/MoyenneBacPage";
import NotesPage from "./pages/NotesPage/NotesPage";
import SpecialitesPage from "./pages/SpecialitesPage/SpecialitesPage";
import { FILIERES } from "./components/FiliereGrid/FiliereGrid";
import "./App.css";

function App() {
  const [step, setStep] = useState(0);
  const [filiereId, setFiliereId] = useState(null);
  const [moyenne, setMoyenne] = useState(null);
  const [notesEssentielles, setNotesEssentielles] = useState(null);

  const subjectItem = FILIERES.find((f) => f.id === filiereId) || null;

  if (step === 0) {
    return <Home onStart={() => setStep(1)} />;
  }

  if (step === 1) {
    return (
      <FiliereSelectionPage
        onNext={(id) => {
          setFiliereId(id);
          setStep(2);
        }}
        onBackHome={() => setStep(0)}
      />
    );
  }

  if (step === 2) {
    return (
      <MoyenneBacPage
        subjectItem={subjectItem}
        onBack={() => setStep(1)}
        onNext={(value) => {
          setMoyenne(value);
          setStep(3);
        }}
      />
    );
  }

  if (step === 3) {
    return (
      <NotesPage
        subjectItem={subjectItem}
        filiereKey={filiereId}
        moyenneBac={moyenne}
        onBack={() => setStep(2)}
        onNext={(notes) => {
          setNotesEssentielles(notes);
          setStep(4);
        }}
      />
    );
  }

  return (
    <SpecialitesPage
      onEditData={() => setStep(1)}
      filiereKey={filiereId}
      moyenneBac={moyenne}
      notesEssentielles={notesEssentielles}
    />
  );
}

export default App;