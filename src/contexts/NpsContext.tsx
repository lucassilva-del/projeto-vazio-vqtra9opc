import React, { createContext, useContext, useState } from "react";

export type NpsResponse = {
  id: string;
  score: number;
  feedback: string;
  createdAt: string;
};

const MOCK_DATA: NpsResponse[] = [
  { id: "1", score: 10, feedback: "Amazing experience, highly recommend!", createdAt: new Date(Date.now() - 86400000).toISOString() },
  { id: "2", score: 9, feedback: "Very good service overall.", createdAt: new Date(Date.now() - 172800000).toISOString() },
  { id: "3", score: 7, feedback: "It was okay, nothing special.", createdAt: new Date(Date.now() - 259200000).toISOString() },
  { id: "4", score: 4, feedback: "Support took too long to answer.", createdAt: new Date(Date.now() - 345600000).toISOString() },
  { id: "5", score: 10, feedback: "Loved the new features!", createdAt: new Date(Date.now() - 432000000).toISOString() },
];

interface NpsContextType {
  responses: NpsResponse[];
  addResponse: (score: number, feedback: string) => void;
}

const NpsContext = createContext<NpsContextType | undefined>(undefined);

export function NpsProvider({ children }: { children: React.ReactNode }) {
  const [responses, setResponses] = useState<NpsResponse[]>(MOCK_DATA);

  const addResponse = (score: number, feedback: string) => {
    const newResponse: NpsResponse = {
      id: Math.random().toString(36).substring(7),
      score,
      feedback,
      createdAt: new Date().toISOString(),
    };
    setResponses((prev) => [newResponse, ...prev]);
  };

  return (
    <NpsContext.Provider value={{ responses, addResponse }}>
      {children}
    </NpsContext.Provider>
  );
}

export function useNps() {
  const context = useContext(NpsContext);
  if (!context) throw new Error("useNps must be used within NpsProvider");
  return context;
}
