import { Box } from '@mui/system'
import { useTwilio } from '../../../../hooks'

interface Props {
  roomName: any
  token: any
}

const Room = ({ roomName, token }: Props) => {
  const { remoteParticipant, localParticipant } = useTwilio(token)

  return (
    <Box sx={{ height: '100%' }}>
      {localParticipant}
      {remoteParticipant}
    </Box>
  )
}

export default Room
