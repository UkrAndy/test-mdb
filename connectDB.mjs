import config from '../config/default.mjs'
// Імпортуємо необхідний модуль
import mongoose from 'mongoose'

// Встановлюємо глобальні проміси
mongoose.Promise = global.Promise
// Функція для підключення до MongoDB
export default async function () {
  try {
    const uri = `mongodb://brylaandrii${process.env.PASS}@testclaster-shard-00-00.t04td.mongodb.net:27017,testclaster-shard-00-01.t04td.mongodb.net:27017,testclaster-shard-00-02.t04td.mongodb.net:27017/?ssl=true&replicaSet=atlas-5sticq-shard-0&authSource=admin&retryWrites=true&w=majority&appName=testclaster`

    console.log(uri)
    await mongoose.connect(uri)
    // await mongoose.connect(config.mongoURI)
    console.log('-------- connected')

    console.log('Успішно підключено до MongoDB')
  } catch (err) {
    console.log('errrrrrrror')

    console.error('Помилка підключення до MongoDB:', err)
  }
}
