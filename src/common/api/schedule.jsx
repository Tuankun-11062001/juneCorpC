import api from ".";

const scheduleApi = {
  getScheduleToday: async () => {
    const fetch = await api.getMethod("/schedule");
    return fetch;
  },
  getWeek: async () => {
    const fetch = await api.getMethod(`/schedule/week`);
    return fetch;
  },
  createSchedule: async (body) => {
    const fetch = await api.postMethod("/schedule/create", body);
    return fetch;
  },

  editSchedule: async (body) => {
    const id = body._id;
    const fetch = await api.putMethod(`/schedule/${id}`, body);
    return fetch;
  },

  deleteTodo: async (id) => {
    const fetch = await api.deleteMethod(`/todo/deleteTodo/${id}`);
    return fetch;
  },
};

export default scheduleApi;
