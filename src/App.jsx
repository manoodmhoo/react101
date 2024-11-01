import { useState } from 'react'
import ParentComponent from './props/ParentComponent'
import FuncProp from './props_function/ParentComponent'
import ComponentProp from './props_component/ParentComponent'
import SpreadOperatorProp from './props_spread_operator/ParentComponent'

import Worshop1 from './Hooks/useState/Worshop1'
import Worshop2 from './Hooks/useState/Worshop2'
import Worshop3 from './Hooks/useState/Worshop3'
import Workshop4 from './Hooks/useState/Worshop4'
import Worshop5 from './Hooks/useState/Worshop5'

import Workshop6 from './Hooks/useReducer/Workshop6'
import UseContext1 from './Hooks/useContext/UseContext1'
import CountContextProvider from './Hooks/useContext/CountContextProvider'
import Mount from './Hooks/ReacyLifecycle/Mount'
import Updating from './Hooks/ReacyLifecycle/Updating'
import Unmount from './Hooks/ReacyLifecycle/Unmount'

import FetchApi from './Hooks/ReacyLifecycle/Workshop/FetchApi'
import Timer from './Hooks/ReacyLifecycle/Workshop/Timer'
import MemberInput from './Hooks/ReacyLifecycle/Workshop/MemberInput'
import AutoSuggestion from './Hooks/ReacyLifecycle/Workshop/AutoSuggestion'
import FormValidation from './Hooks/ReacyLifecycle/Workshop/FormValidation'
import FieldFocus from './Hooks/ReacyLifecycle/Workshop/FieldFocus'
import SessionLogin from './Hooks/ReacyLifecycle/Workshop/SessionLogin'

function App() {
  const [isShow, setIsShow] = useState(true)

  return (
    <>
      {/* <ParentComponent />
      <FuncProp />
      <ComponentProp />
      <SpreadOperatorProp /> */}
      {/* <Worshop1 /> */}
      {/* <Worshop2 /> */}
      {/* <Worshop3 /> */}
      {/* <Workshop4 /> */}
      {/* <Worshop5 /> */}
      {/* <Workshop6 /> */}
      {/* <CountContextProvider>
      <UseContext1 />
      </CountContextProvider> */}
      {/* <Mount /> */}
      {/* <Updating /> */}

      {/* {isShow && <Unmount />}
      <button onClick={() => setIsShow(!isShow)}>Toggle</button> */}

      {/* <FetchApi /> */}
      {/* <Timer /> */}
      {/* <MemberInput/> */}
      {/* <AutoSuggestion /> */}
      {/* <FormValidation /> */}
      {/* <FieldFocus /> */}
      <SessionLogin />
    </>
  )
}

export default App
