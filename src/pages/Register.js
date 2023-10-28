import { useState } from 'react'
import CreateAccountPage1 from '../components/onboarding-page/CreateAccountPage1'
import CreateAccountPage2 from '../components/onboarding-page/CreateAccountPage2'
import CreateAccountPage3 from '../components/onboarding-page/CreateAccountPage3'

function Register() {
  const [step, setStep] = useState(1)

  const nextStep = () => {
    setStep((step % 3) + 1)
  }

  return (
    <div>
      {step === 1 && <CreateAccountPage1 nextStep={nextStep} />}
      {step === 2 && <CreateAccountPage2 nextStep={nextStep} />}
      {step === 3 && <CreateAccountPage3 nextStep={nextStep} />}
    </div>
  )
}

export default Register
