import { createSelector } from "reselect";

const getContacts = state => state.contacts;
const getFilter = state => state.filter;
const getSearch = state => state.search;

export const getFilteredContacts = createSelector(
  getContacts,
  getFilter,
  getSearch,
  (contacts, filter, query) => {
    if (!filter && !query) {
      return contacts;
    }

    const meetsFilteringCondition = contact =>
      filter
        ? contact.name.charAt(0).toUpperCase() === filter.toUpperCase()
        : true;

    const meetsSearch = contact =>
      query ? contact.name.toUpperCase().includes(query.toUpperCase()) : true;

    return contacts.filter(
      contact => meetsFilteringCondition(contact) && meetsSearch(contact)
    );
  }
);

export const getContact = username =>
  createSelector(
    getContacts,
    contacts => contacts.find(contact => contact.username === username)
  );
