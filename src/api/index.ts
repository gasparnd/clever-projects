const apiUrl: string = "/api";

export const getProjects = async () => {
  try {
    const res = await fetch(`${apiUrl}/projects`);
    if (res.status === 200) {
      return res.json();
    }
  } catch (err) {
    console.log(err);
  }
};

export const getProject = async (id: number) => {
  try {
    const res = await fetch(`${apiUrl}/projects/${id}`);
    if (res.status === 200) {
      return res.json();
    }
  } catch (err) {
    console.log(err);
  }
};

export const getWorkerList = async (projects: number[]) => {
  try {
    const promiseUrlArr = projects.map((id) => `${apiUrl}/projects/${id}`);

    let jsonArray = await Promise.all(
      promiseUrlArr.map((url) => fetch(url)),
    ).then(async (res) => {
      return Promise.all(res.map(async (data) => await data.json()));
    });

    return jsonArray.map((el) => el.data);
  } catch (err) {
    console.log(err);
  }
};

export const getWorker = async (id: number) => {
  try {
    const res = await fetch(`${apiUrl}/workers/${id}`);
    if (res.status === 200) {
      return res.json();
    }
  } catch (err) {
    console.log(err);
  }
};

export const getWorkers = async (team: number[]) => {
  try {
    const promiseUrlArr = team.map((id) => `${apiUrl}/workers/${id}`);

    let jsonArray = await Promise.all(
      promiseUrlArr.map((url) => fetch(url)),
    ).then(async (res) => {
      return Promise.all(res.map(async (data) => await data.json()));
    });

    return jsonArray.map((el) => el.data);
  } catch (err) {
    console.log(err);
  }
};
