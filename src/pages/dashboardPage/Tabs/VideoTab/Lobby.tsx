import { Button, IconButton, Typography } from '@mui/material'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk'

interface Props {
  handleSubmit: any
}

const users = ['John', 'Andrew', 'Melissa', 'Vivian', 'Andy']

const Lobby = ({ handleSubmit }: Props) => {
  return (
    <form
      style={{
        marginTop: '30px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
      onSubmit={handleSubmit}
    >
      {users.map((user) => (
        <div
          style={{
            margin: '15px',
            width: '100%',
            justifyContent: 'center',
            display: 'flex',
          }}
        >
          <Typography
            style={{ width: '150px', fontWeight: 'bold' }}
            variant='h5'
          >
            {user}
          </Typography>
          <Button
            key={user}
            style={{ borderRadius: '15px', padding: '0 50px' }}
            variant='contained'
            type='submit'
            endIcon={
              <IconButton disabled style={{ fontSize: '40px' }}>
                <PhoneInTalkIcon fontSize='inherit' />
              </IconButton>
            }
          >
            <Typography variant='h4'>Join Call</Typography>
          </Button>
        </div>
      ))}
    </form>
  )
}

export default Lobby
