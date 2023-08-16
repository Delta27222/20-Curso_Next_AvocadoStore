import Database from "@database/db";

const getById = async (request, response) => {
  try {
    const { id } = request.query;
    const database = new Database();
    const data = await database.getById(id);

    if (Object.keys(data).length > 0) {
      response.status(200).json(data);
    } else {
      response.status(404).json({ error: 'No se encontraron datos para el ID proporcionado.' });
    }
  } catch (error) {
    console.error('Error al obtener datos de la base de datos:', error);
    response.status(500).json({ error: 'Ocurrió un error al obtener los datos.' });
  }
};

export default getById;