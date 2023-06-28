const facts = document.getElementById("facts");
const btn = document.getElementById("btn");
const apiKey = "Rfdo01iep5cKSwZMWZhTzw==VEiaY0NK1RYnhFks";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

const apiURL = "https://api.api-ninjas.com/v1/facts?limit=1";

async function getFacts() {
  try {
    facts.innerText = "Loading...";
    btn.disabled = true;
    btn.innerText = "Facts..";
    const response = await fetch(apiURL, options);
    const data = await response.json();
    facts.innerText = data[0].fact;
    btn.disabled = false;
    btn.innerText = "Next Facts";
  } catch (error) {
    facts.innerText =
      "Interesting facts failed to load due to some issue <strong>SORRY!</strong>";
  }
}

btn.addEventListener("click", getFacts);
