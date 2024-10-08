export default async function handler(req, res) {
  const apiBaseDomen = process.env.VITE_API_BASE_AMO_DOMEN;
  const apiAuthorization = process.env.VITE_API_AUTHORIZATION;

  const url = `https://${apiBaseDomen}.amocrm.ru/api/v4/${req.query["0"]}`;

  const response = await fetch(url, {
    method: req.method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiAuthorization}`,
    },
    body: req.method === "POST" ? JSON.stringify(req.body) : null,
  });

  const data = await response.json();
  res.status(response.status).json(data);
}
