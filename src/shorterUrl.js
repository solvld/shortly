const apiKey = '3d1303931840477886b77a3c2d0802e7';
//rebrandly access token = 3d1303931840477886b77a3c2d0802e7
//bit.ly access token = 8520db21dd4b4704fa4c81011fc352e32271c702
const url = 'https://api.rebrandly.com/v1/links';

//const newUrl = 'https://pythontutor.com/visualize.html#mode=edit';



const shortenUrl = async () => {
  const urlToShorten = newUrl;
  const data = JSON.stringify({ destination: urlToShorten });
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: data,
      headers: {
        'Content-type': 'application/json',
        apikey: apiKey,
      },
    });
    // add code here
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse.link;
    }
  } catch (error) {
    console.log(error);
  }
};

//https://app.bitly.com/Bo1ndWUGd2c/links?pendo=checklist-links документация APi
const apiKeyBitly = '8520db21dd4b4704fa4c81011fc352e32271c702test';
const urlBitly = 'https://api-ssl.bitly.com/v4/shorten'

const shortenUrlBitly = async (newUrl) => {
  const urlToShorten = newUrl;
  const data = JSON.stringify({ long_url: urlToShorten });
  try {
    const response = await fetch(urlBitly, {
      method: 'POST',
      body: data,
      headers: {
        Authorization: `Bearer ${apiKeyBitly}`,
        'Content-Type': 'application/json',
      },
      domain: 'bit.ly',
      group_guid: 'Ba1bc23dE4F',
    });

    if (response.ok) {
      const jsonResponse = await response.json();
      console.log(jsonResponse.link)
      return jsonResponse.link
    }
  } catch (error) {
    console.log(error);
  }
};

export default shortenUrlBitly