import { createSlice } from '@reduxjs/toolkit';

export const eventsSlice = createSlice({
  name: 'eventos',
  initialState: {
    eventos: [],
    filteredEvents: [],
  },
  reducers: {
    setFilteredEvents: (state, { payload: events }) => {
      state.filteredEvents = [...events];
    },
    addNewEvent: (state, { payload: newEvent }) => {
      const dates = [...newEvent.dates];
      const tTickets = [...newEvent.typeTicket];
      const fullTTicket = dates
        .map((date) => {
          return tTickets.map((tTicket) => {
            return { ...tTicket, date: date };
          });
        })
        .reduce((acc, currVal) => acc.concat(currVal));
      newEvent.typeTicket = [...fullTTicket];
      state.eventos.push({ ...newEvent });
    },
    saveEditEvent: (state, { payload: editedEvent }) => {
      const index = state.eventos.findIndex(
        (event) => event.id === editedEvent.id
      );
      const dates = [...editedEvent.dates];
      const tTickets = [...editedEvent.typeTicket];
      const fullTTicket = dates
        .map((date) => {
          return tTickets.map((tTicket) => {
            return { ...tTicket, date: date };
          });
        })
        .reduce((acc, currVal) => acc.concat(currVal));
      editedEvent.typeTicket = [...fullTTicket];
      state.eventos[index] = { ...editedEvent };
    },
  },
});

export const { setFilteredEvents, addNewEvent, saveEditEvent } =
  eventsSlice.actions;

export default eventsSlice.reducer;
