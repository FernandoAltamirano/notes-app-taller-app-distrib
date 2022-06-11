const url = "http://localhost:5000/api/tasks"

export const sendTask = async(data) => {
  await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

};

export const updateTask = async (id,data) => {
  await fetch(`${url}/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
}

export const getTasks = async () => {
  const response = await fetch(url)
  const data = await response.json()
  return data
}

export const getTasksById = async (id) => {
  const response = await fetch(`${url}/${id}`)
  const data = await response.json()
  return data
}
