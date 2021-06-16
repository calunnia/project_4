import { createServer, Model } from 'miragejs';



const data= [
  { "id":1,
    "title":'Question number... ?',
    "info":' It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
    "year": 1994,
    "director": "Frank Darabont",
    "duration": "2h 22min",
    "genre": [
      "Crime",
      "Drama"
    ],
    "rate": 9.3
  },
  {"id":2,
  "title":'Question number... ?',
  "info":' It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
    "year": 1972,
    "director": "Francis Ford Coppola",
    "duration": "2h 55min",
    "genre": [
      "Crime",
      "Drama"
    ],
    "rate": 9.2
  },
  {"id":3,
  "title":'Question number... ?',
  "info":' It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
    "year": 1974,
    "director": "Francis Ford Coppola",
    "duration": "3h 22min",
    "genre": [
      "Crime",
      "Drama"
    ],
    "rate": 9
  },  {
    "id":4,
    "title":'Question number... ?',
    "info":' It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
    "year": 1989,
    "director": "Peter Weir",
    "duration": "2h 8min",
    "genre": [
      "Comedy",
      "Drama"
    ],
    "rate": 8
  }
]

export function makeServer({ environment = 'test' } = {}) {
  let server = createServer({
    environment,
    models: {
      client: Model,
    },
    seeds(server) { },
    routes() {
      this.namespace = '/api/v1';        
      this.timing = 2000

      this.get('data', (schema, request) => {               // /api/ + movies url-rol kell fetchelni
      
        return data
      });

  this.get('filterData', (schema, request) => {                           // api/clients?search=[keresendo szoveg]&nev=otto
        const search = request.queryParams.search
        const clientName= request.queryParams.nev   // ===otto
        return data.filter(client => client.name.includes(search))
      });



this.post('/save', (schema, request) => {                                 // POST method to api/pets
        let { name, isVaccinated } = JSON.parse(request.requestBody);
        data.forEach(c => {
          c.pets.forEach(p => {
            if (p.name === name) p.isVaccinated = isVaccinated
          })
        })
        return { success: true }
      });

      
    },
  });
  return server;
}
