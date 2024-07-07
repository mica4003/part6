import { useSelector, useDispatch } from 'react-redux'
import { handleVote} from '../reducers/anecdoteReducer'
import Notification from './Notification'
import { setNotificationWithTimeout } from '../reducers/notificationReducer'
import { useNotification } from '../NotificationContext'

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  const filter = useSelector(state => state.filter)
  const dispatch = useDispatch()
  const [_, notificationDispatch] = useNotification()


  const filteredAnecdotes = anecdotes.filter(anecdote=>
    anecdote.content.toLowerCase().includes(filter.toLowerCase())
  )
  
  const vote = (id) => {
    dispatch(handleVote(id))
    const anecdote = anecdotes.find(a => a.id === id)

    notificationDispatch({ type: 'SET_NOTIFICATION', payload: `You voted '${anecdote.content}'` })
    setTimeout(() => {
      notificationDispatch({ type: 'CLEAR_NOTIFICATION' })
    }, 5000)
  }
 
  const sortedAnecdotes = filteredAnecdotes.sort((a,b) => b.votes - a.votes)
  
  return (
    <div>
      <h2>Anecdotes</h2>
      {sortedAnecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList