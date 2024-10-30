class CRUDOperations {
  constructor(model) {
    this.model = model
  }

  async create(data) {
    try {
      const document = new this.model(data)
      return await document.save()
    } catch (error) {
      throw new Error(`Error creating document: ${error.message}`)
    }
  }

  async readById(id) {
    try {
      return await this.model.findById(id)
    } catch (error) {
      throw new Error(`Error reading document by ID: ${error.message}`)
    }
  }

  async readOneByCondition(condition) {
    try {
      return await this.model.findOne(condition)
    } catch (error) {
      throw new Error(`Error reading document by condition: ${error.message}`)
    }
  }

  async readManyByCondition(condition) {
    try {
      return await this.model.find(condition)
    } catch (error) {
      throw new Error(`Error reading documents by condition: ${error.message}`)
    }
  }

  async updateById(id, data) {
    try {
      return await this.model.findByIdAndUpdate(id, data, {
        new: true,
        runValidators: true,
      })
    } catch (error) {
      throw new Error(`Error updating document by ID: ${error.message}`)
    }
  }

  async deleteById(id) {
    try {
      return await this.model.findByIdAndDelete(id)
    } catch (error) {
      throw new Error(`Error deleting document by ID: ${error.message}`)
    }
  }

  async deleteOneByCondition(condition) {
    try {
      return await this.model.findOneAndDelete(condition)
    } catch (error) {
      throw new Error(`Error deleting document by condition: ${error.message}`)
    }
  }

  async deleteManyByCondition(condition) {
    try {
      return await this.model.deleteMany(condition)
    } catch (error) {
      throw new Error(`Error deleting documents by condition: ${error.message}`)
    }
  }

  async readAll() {
    try {
      return await this.model.find()
    } catch (error) {
      throw new Error(`Error reading all documents: ${error.message}`)
    }
  }

  async deleteAll() {
    try {
      return await this.model.deleteMany({})
    } catch (error) {
      throw new Error(`Error deleting all documents: ${error.message}`)
    }
  }
}

export default CRUDOperations
