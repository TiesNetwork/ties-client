class Projects {
  /**
   * @param {{
   *   description: (string),
   *   name: (string)
   * }} values
   * @return {{}}
   */
  static async create(values) {
    const project = await Client.user.newProject({
            date_end: values.dateEnd || null,
            date_start: values.dateStart || null,
            description: values.description,
            name: values.name
          })
        , response = await project.saveToDB()

    const data = project.toJson()

    return {
      __address: data.__address,
      dateEnd: data.date_end,
      dateStart: data.date_start,
      description: data.description,
      id: data.id.toString(),
      name: data.name,
    }
  }

  /**
   * @param {string} address
   * @param {string} id
   */
  static async delete(address, id) {
    const project = await Client.Project.createFromDB(address, id)
        , response = await project.deleteFromDB()

    return response
  }

  /**
   * @param {string} address - wallet (user) address
   */
  static async getByAddress(address) {
    let response = await Client.Project.getProjects(address)

    return response.map(project => {
      const data = project.toJson()

      return {
        __address: data.__address,
        dateEnd: data.date_end,
        dateStart: data.date_start,
        description: data.description,
        id: data.id.toString(),
        name: data.name,
      }
    });
  }

  /**
   * @param {string} address
   * @param {string} id
   * @param {{
   *   dateEnd: (string),
   *   dateStart: (string),
   *   description: (string),
   *   name: (string)
   * }} values
   */
  static async update(address, id, values) {
    const project = await Client.Project.createFromDB(address, id)

    project.raw = { ...project.raw,
      date_end: values.dateEnd,
      date_start: values.dateStart,
      description: values.description,
      name: values.name
    }

    await project.saveToDB()

    const data = project.toJson()

    return {
      __address: data.__address,
      dateEnd: data.date_end,
      dateStart: data.date_start,
      description: data.description,
      id: data.id.toString(),
      name: data.name,
    }
  }
}

export default Projects
