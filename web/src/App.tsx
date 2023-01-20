import { Habit } from "./componentes/Habit"

function App() {
  return (
    <div>
      <Habit completed={3} />
      <Habit completed={7} />
      <Habit completed={10} />
      <Habit completed={20} />
    </div>
  )
}

export default App
