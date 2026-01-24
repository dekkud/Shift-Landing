import Benefits from "./sections/Benefits/Benefits"
import Cases from "./sections/Cases/Cases"
import Consultation from "./sections/Consultation/Consultation"
import FirstScreen from "./sections/FirstScreen/FirstScreen"
import HowItWorks from "./sections/HowItWorks/HowItWorks"
import Problems from "./sections/Problems/Problems"
import Reviews from "./sections/Reviews/Reviews"
import Tariffs from "./sections/Tariffs"
import TrustPartners from "./sections/TrustPartners/TrustPartners"
import Try from "./sections/Try/Try"

function App() {
  return (
    <>
      <FirstScreen />
      <Problems />
      <HowItWorks />
      <Benefits />
      <TrustPartners />
      <Cases />
      <Reviews />
      <Try />
      <Consultation />
      <Tariffs />
    </>
  )
}

export default App
