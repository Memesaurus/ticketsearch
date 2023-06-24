"use client"

type Props = {
  error: Error
}

const Error = ({ error }: Props) => {
  return (
    <div>{error.message}</div>
  )
}

export default Error