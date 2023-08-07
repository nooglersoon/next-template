import React, { ReactNode } from "react";

type Props = {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      {children}
    </main>
  )
}