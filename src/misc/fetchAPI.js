const baseURL = 'https://api.tvmaze.com';

export async function getAPI(subURL) {
  const response = await fetch(`${baseURL}${subURL}`).then(result =>
    result.json()
  );
  return response;
}
