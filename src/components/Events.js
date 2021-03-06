import React, { Component } from "react";

import eventStyles from "./event.module.scss";

class Events extends Component {
  constructor() {
    super();
    this.state = {
      events: []
    };
  }

  componentDidMount() {
    fetch("/api/events")
      .then(res => res.json())
      .then(events => this.setState({ events }, () => console.log("events")));
  }

  handleClick = (e, event) => {
    return (e.target.value = event);
  };

  render() {
    return (
      <div>
        <h2 className={eventStyles.title}>Events</h2>
        <p className={eventStyles.epigraph}>What's on in the community</p>
        <ol className={eventStyles.container}>
          {this.state.events.map(event => (
            <li className={eventStyles.flexbox} key={event.id}>
              <h2 className={eventStyles.name}>{event.name}</h2>
              <p>{event.location}</p>
              <button
                value={event.id}
                onClick={e => {
                  this.handleClick(e, event);
                  window.location = `#/events/${event.id}`;
                }}
              >
                Event
              </button>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default Events;
