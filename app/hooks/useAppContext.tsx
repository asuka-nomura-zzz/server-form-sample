'use client'

import { createContext, useContext, FC, PropsWithChildren } from 'react'
import { Timeslot } from '@/app/types/Timeslot';

export const AppContext = createContext<{
  timeslots: Timeslot[],
}>({
  timeslots: [],
});

export const AppWrapper: FC<PropsWithChildren<{
  timeslots: Timeslot[],
}>> = ({ timeslots, children }) => {

  return (
    <AppContext.Provider value={{timeslots}}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}