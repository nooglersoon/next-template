import React from "react";

type Props = {
  content: string
}

export default function Description({ content }: Props) {
  return (
    <p className="text-lg">{content}</p>
  )
}