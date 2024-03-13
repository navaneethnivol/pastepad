'use client'

import {  createContext,  useState } from 'react';

export const isNewClickedStore = createContext({isNewClicked:false,setIsNewClicked:(value:boolean)=>{}});


type Props = {
    children: React.ReactNode
  }

export default function IsNewClickedContext({children}:Props) {
  const [isNewClicked, setIsNewClicked] = useState<boolean>(false);

  return (
    <isNewClickedStore.Provider value={{ isNewClicked,setIsNewClicked }}>
      {children}
    </isNewClickedStore.Provider>
  );
}