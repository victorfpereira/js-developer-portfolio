async function fetchProfileData(params) {
  const url =
    "https://raw.githubusercontent.com/victorfpereira/js-developer-portfolio/main/data/profile.json";
  const fetching = await fetch(url);
  return await fetching.json();
}
