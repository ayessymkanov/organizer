import uuidv4 from 'uuid/v4'
import { ADD_NOTE, SELECT_NOTE, EDIT_NOTE } from '../actionTypes'

const INITIAL_STATE = {
  notes: [
    {id: 1, title: 'note1 ajksdnjkasndj najsdn jkasnd  ajsdnjkansdjkna jksnd jknasjkdn jkasnd ', desc: 'note1 desc'},
    {id: 2, title: 'note2', desc: 'note2 desc'},
    {id: 3, title: 'note3', desc: 'note3 desc'}
  ],
  selectedNoteId: ''
}

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action
  switch (type) {
    case ADD_NOTE: {
      const note = {...payload, id: uuidv4()}
      return {
        ...state,
        notes: [...state.notes, note],
        selectedNoteId: note.id
      }
    }
    case SELECT_NOTE: {
      return {
        ...state,
        selectedNoteId: payload
      } 
    }
    case EDIT_NOTE: {
      const { id, title, desc } = payload
      return {
        ...state,
        notes: state.notes.map(note => {
          if (note.id === id) {
            return {...note, title, desc}
          }
          return note
        })
      }
    }
    default: {
      return state
    }
  }
}
