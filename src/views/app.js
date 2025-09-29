app.get('/', (req, res) => {
res.sendFile('views/index.html', { root: __dirname })
})

data = {'integrantes':[
  {'nome':'fulano da silva'},
  {'nome':'ciclano sauro'}
]}

app.get('/integrantes', (req, res) => {
  res.json(data)
})
