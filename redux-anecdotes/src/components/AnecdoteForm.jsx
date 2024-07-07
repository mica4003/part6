import { useDispatch } from 'react-redux'
import { createAnecdote} from '../reducers/anecdoteReducer'
import Notification from './Notification'
import anecdoteService from '../services/anecdotes'
import { setNotificationWithTimeout } from '../reducers/notificationReducer'
import { useNotification } from '../NotificationContext'

const AnecdoteForm = () =>{
  const dispatch = useDispatch()
  const [_,notificationDispatch] = useNotification()

  const create = async(event) =>{
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(createAnecdote(content))

    notificationDispatch({ type: 'SET_NOTIFICATION', payload: `New anecdote created: ${content}` })
    setTimeout(() => {
      notificationDispatch({ type: 'CLEAR_NOTIFICATION' })
    }, 5000)
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={create}>
        <div><input name="anecdote" /></div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm