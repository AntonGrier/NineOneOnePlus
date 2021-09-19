import { useTwilio } from '../../../hooks'

interface Props {
  token: string
}

export const Video = ({ token }: Props) => {
  console.log(token)
  const { remoteParticipant, localParticipant } = useTwilio(token, true)

  return (
    <>
      {localParticipant}
      {remoteParticipant}
    </>
  )
}
