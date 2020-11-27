//subindo o app
import app from './app'
import database from './database'


database.sync() //tirei o {force:true} para ele não recriar um novo banco
console.log('Database running at 3306');

//sync p sincronizar com o bd
//force para forçar a criação de tabelas no bd//só fazemos em abiente dev, enquanto estamos programando 


app.listen(3001)
console.log('Server running at 3000');

