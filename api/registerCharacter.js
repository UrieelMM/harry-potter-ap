export default async function registerCharacter(character) {
  const URL = "http://localhost:4000/characters";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(character),
  };
  try {
    const res = await fetch(URL, options);
    const result = res.status;
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}
