import './App.css';
import HookUseEffect from './hooks/HookUseEffect';
import HookUseReducer from './hooks/HookUseReducer';
import HookUseState from './hooks/HookUseState'
import UseCustomHooks from './hooks/UseCustomHooks';
import HookUseRef from './hooks/HookUseRef';
import HOCUsage from './HOC/HOCUsage';
import RenderProps from './RenderProps/RenderProps';
import { AlertProvider } from './hooks/HookUseContext';


function App() {
  return (
    <AlertProvider>

    <div className="App">
     {/* <HookUseState/> */}
     {/* <HookUseReducer/> */}
     {/* <HookUseEffect/> */}
     {/* <UseCustomHooks/> */}
     {/* <HookUseRef/> */}
     {/* <HOCUsage/> */}
     {/* <RenderProps/> */}
    </div>
    </AlertProvider>
  );
}

export default App;
