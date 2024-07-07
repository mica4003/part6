import { createSlice } from '@reduxjs/toolkit'
import {setNotification, clearNotification} from './notificationReducer'
import anecdoteService from '../services/anecdotes'

const anecdoteSlice = createSlice({
  name:'anecdotes',
  initialState: [],
  reducers: {
    /*handleVote(state, action){
      const id = action.payload
      const anecdoteToChange = state.find(a => a.id === id)
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes+1
      }
      return state.map(anecdote => anecdote.id ===id? changedAnecdote: anecdote)
    },*/

    updateAnecdote(state, action){
      const id = action.payload.id
      return state.map(anecdote => anecdote.id===id? action.payload : anecdote)
    },

    setAnecdotes(state, action){
      return action.payload
    },

    appendAnecdote(state, action){
      state.push(action.payload)
    }
  }
})

export default anecdoteSlice.reducer
export const {setAnecdotes, appendAnecdote, updateAnecdote} = anecdoteSlice.actions

export const initializeAnecdotes = ()=>{
  return async dispatch =>{
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = (content)=>{
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export const handleVote = (id)=>{
  return async (dispatch, getState) => {
    const state = getState()
    const anecdoteToChange = state.anecdotes.find(a=>a.id===id)
    const changedAnecdote = await anecdoteService.update(id, {...anecdoteToChange,  votes: anecdoteToChange.votes+1})
    dispatch(updateAnecdote(changedAnecdote))
  }
}

/*
const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case 'VOTE':
      const id = action.payload.id
      const anecdoteToChange = state.find(a => a.id === id)
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes+1
      }
      return state.map(anecdote=>anecdote.id === id? changedAnecdote: anecdote)
    
    case 'NEW_ANECDOTE':
      return [...state, asObject(action.payload.content)]
    default:
      return state
  }
}

export const handleVote = (id) => {
  return {
    type: 'VOTE',
    payload: {id}
  }
}

export const createAnecdote = (content)=>{
  return {
    type: 'NEW_ANECDOTE',
    payload: {content}
  }
}
export default reducer
*/