import React from "react";
import fetch from "isomorphic-fetch";

export const fetchCards = () => {
  let request = {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/json",
      Accept: "application/json"
    })
  };

  return (
    fetch("http://localhost:3000/addressbook.json", request)
      // TODO can't this second then be a step in the fetch promise chain?
      .then(response => {
        return response.json();
      })
      .then(data => data["address-book"])
  );
};

export const getUserFromEmail = email => email.split("@")[0];

export const DataContext = React.createContext();
