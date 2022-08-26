export default async function registerCharacter(character) {
  const URL = "http://localhost:4000/favorites";
  const options = {
    method: "POST",
    header: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(character),
  };
  try {
    const res = await fetch(URL, options);
    return res;
  } catch (error) {
    console.log(error);
    return null;
  }
}
