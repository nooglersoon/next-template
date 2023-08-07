import React from "react";

type Props = {
  content: string
}

export default function Title({ content }: Props) {
  return (
    <h1 className="text-4xl font-bold mb-4">{content}</h1>
  )
}