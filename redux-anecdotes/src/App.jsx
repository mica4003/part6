import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Filter from './components/Filter'
import { setAnecdotes } from './reducers/anecdoteReducer'
import anecdoteService from './services/anecdotes'
import { initializeAnecdotes } from './reducers/anecdoteReducer'
import { NotificationProvider } from './NotificationContext'
import Notification from './components/Notification'

const App = () => {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(initializeAnecdotes())
  },[])

  return (
    <NotificationProvider>
      <div>
        <h2>Anecdotes</h2>
        <Filter/>
        <Notification/>
        <AnecdoteList />
        <AnecdoteForm />
      </div>
    </NotificationProvider>
  )
}

export default App