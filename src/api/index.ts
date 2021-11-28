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
