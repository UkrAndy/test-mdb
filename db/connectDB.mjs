import config from '../config/default.mjs'
// Імпортуємо необхідний модуль
import mongoose from 'mongoose'

// Встановлюємо глобальні проміси
mongoose.Promise = global.Promise
// Функція для підключення до MongoDB
export default async function () {
  try {
    const uri = process.env.CONNECTION_STR

    await mongoose.connect(uri)
    // await mongoose.connect(config.mongoURI)
    console.log('-------- connected')

    console.log('Успішно підключено до MongoDB')
  } catch (err) {
    console.log('errrrrrrror')

    console.error('Помилка підключення до MongoDB:', err)
  }
}
