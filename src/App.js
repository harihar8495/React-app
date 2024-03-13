import './App.css';
import React from 'react';
import Counter from './components/Counter';
import HoookCounterFour from './components/HookCounterFour';
import Hookcounter from './components/Hookcounter';
import HookcounterThree from './components/HookcounterThree';
import HookCounterOne from './components/HookCounterOne';
import HookCounterFive from './components/HookCounterFive';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import IntervalHookCounter from './components/IntervalHookCounter';
import DataFetching from './DataFetching';
import ComponentC from './components/ComponentC';
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';
import ComponentM from './components/ComponentM';
import ComponentN from './components/ComponentN';
import ComponentO from './components/ComponentO';
import ComponentP from './components/ComponentP';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
    {/* <Counter /> */}
    {/* <Hookcounter /> */}
    {/* <HookcounterThree /> */}
    {/* <HoookCounterFour/> */}
    {/* <HookCounterOne /> */}
    {/* <HookCounterFive /> */}
    {/* <HookMouse /> */}
    {/* <MouseContainer /> */}
    {/* <IntervalHookCounter /> */}
    {/* <DataFetching /> */}

    {/* <UserContext.Provider value={'hari'}>
      <ChannelContext.Provider value={'Coimbatore'}>
      <ComponentC />
      </ChannelContext.Provider>
    </UserContext.Provider> */}

    {/* <CounterOne /> */}
    {/* <CounterTwo /> */}
    <ComponentM />
    <ComponentN />
    <ComponentO />
    <ComponentP />

    </div>
  );
}

export default App;
