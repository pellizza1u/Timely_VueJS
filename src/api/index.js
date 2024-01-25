import axios from 'axios';

export const timelyApi = axios.create({
    baseURL: "https://timely.edu.netlor.fr",
    headers: {
        "Content-Type": "application/json",
        Authorization: "key=y7u_d!Iry7%c",
    },
    timeout: 35000,
});

// #region API miscellaneous
export async function pingApi() {
    return timelyApi.get('/api/ping');
}

export async function getApiKeys(name, email) {
    return await timelyApi.post('/api/apikeys', {
        name,
        email,
    });
}
// #endregion

// #region API profile
export async function getProfile() {
    return await timelyApi.get('/api/profile');
}

export async function updateProfile(name, email) {
    return timelyApi.put('/api/profile', {
        name,
        email,
    });
}
// #endregion

// #region API projects
export async function createProject(name, description) {
    return await timelyApi.post('/api/projects', {
        name,
        description,
    });
}

export async function getProjects(filters = {}) {
    return await timelyApi.get('/api/projects', { params: filters });
}

export async function getProject(id) {
    return await timelyApi.get(`/api/projects/${id}`);
}

export async function updateProject(id, name, description) {
    return await timelyApi.put(`/api/projects/${id}`, {
        name,
        description,
    });
}

export async function disableProject(id) {
    return await timelyApi.patch(`/api/projects/${id}/disable`);
}

export async function enableProject(id) {
    return await timelyApi.patch(`/api/projects/${id}/enable`);
}
// #endregion

// #region API activities
export async function createActivity(name, color) {
    return await timelyApi.post('/api/activities', {
        name,
        color,
    });
}

export async function getActivities() {
    return await timelyApi.get('/api/activities');
}

export async function getActivity(id) {
    return await timelyApi.get(`/api/activities/${id}`);
}

export async function updateActivity(id, name, color) {
    return timelyApi.put(`/api/activities/${id}`, {
        name,
        color,
    });
}

export async function disableActivity(id) {
    return await timelyApi.patch(`/api/activities/${id}/disable`);
}

export async function enableActivity(id) {
    return await timelyApi.patch(`/api/activities/${id}/enable`);
}

// ...

// #region API daily objectives
export async function createDailyObjective(name, content) {
    return await timelyApi.post('/api/daily-objectives', {
        name,
        content,
    });
}

export async function getDailyObjectives() {
    return await timelyApi.get('/api/daily-objectives');
}

export async function getDailyObjective(id) {
    return await timelyApi.get(`/api/daily-objectives/${id}`);
}

export async function updateDailyObjective(id, name, color) {
    return await timelyApi.put(`/api/daily-objectives/${id}`, {
        name,
        color,
    });
}

export async function deleteDailyObjective(id) {
    return await timelyApi.delete(`/api/daily-objectives/${id}`);
}

export async function markDailyObjectiveDone(id) {
    return await timelyApi.patch(`/api/daily-objectives/${id}/done`);
}

export async function markDailyObjectiveUndone(id) {
    return await timelyApi.patch(`/api/daily-objectives/${id}/undone`);
}
// #endregion

// #region API time entries
export async function createTimeEntry(project_id, activity_id, start, end, comment) {
    return await timelyApi.post('/api/time-entries', {
        project_id,
        activity_id,
        start,
        end,
        comment,
    });
}

export async function getTimeEntries() {
    return await timelyApi.get('/api/time-entries');
}

export async function getTimeEntry(id) {
    return await timelyApi.get(`/api/time-entries/${id}`);
}

export async function updateTimeEntry(id, project_id, activity_id, start, end, comment) {
    return await timelyApi.put(`/api/time-entries/${id}`, {
        project_id,
        activity_id,
        start,
        end,
        comment,
    });
}

export async function deleteTimeEntry(id) {
    return await timelyApi.delete(`/api/time-entries/${id}`);
}

export async function stopTimeEntry(id) {
    return await timelyApi.patch(`/api/time-entries/${id}/stop`);
}
// #endregion

export default timelyApi;

