export async function getData(url) {
  try {
    const data = await fetch(url);
    const jsonData = await data.json();
    return jsonData;
  } catch {
    throw new Error("Server is not responding, please try later");
  }

  /* 
  console.log(`jsonData = ${jsonData}`);
   */
}
