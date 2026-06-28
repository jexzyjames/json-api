import countriesData from '../countries.json';

export default function handler(request, response) {
  // Allow your React app to fetch this data without CORS blocks
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET');
  
  // Respond with your JSON data and an HTTP 200 Success status
  return response.status(200).json(countriesData);
}
