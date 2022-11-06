import axios from "axios";
import { api } from "../api/api";

export default class EventsRepository {
  constructor(requester=api) {
    this._requester = requester;
  }


  async getEventsByDate(date) {
    try {
      const response = await this._requester.get(`api/v1/events?start_date=${date}`);
      return response.data.result;
    } catch(error) {
      console.log(error);
    }
  }

  async create(eventParams) {
    try {
      await this._requester.post("/api/v1/events", eventParams);
    } catch(error) {
      console.log(error);
    }
  }

  async update(eventParams) {
    try {
      await this._requester.put(`/api/v1/events/${eventParams.id}`, eventParams);
    } catch(error) {
      console.log(error);
    }
  }

  async delete(eventId) {
    try {
      await this._requester.delete(`/api/v1/events/${eventId}`);
    } catch(error) {
      console.log(error);
    }
  }

  async getEventsCategories() {
    try {
      const response = await this._requester.get("api/v1/event_categories");
      return response.data.result;
    } catch (error) {
      console.loh(error)
    }
  }
}