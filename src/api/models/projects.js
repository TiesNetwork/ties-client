class Projects {
  /**
   * @param {{
   *   description: (string),
   *   name: (string)
   * }} values
   * @return {Promise.<void>}
   */
  static async create(values) {
    const project = await Client.user.newProject(values)
        , response = await project.saveToDB()

    return project.toJson()
  }

  /**
   * @param {string} address
   * @param {string} id
   */
  static async delete(address, id) {
    console.error(address, id)
    const project = await Client.Project.createFromDB(address, id)
      console.log(project, project.isLoaded())
    const response = await project.deleteFromDB()
console.log(project)
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
        ...data,
        dateEnd: data.date_end,
        dateStart: data.date_start,
        id: data.id.toString()
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

    return project.raw
  }
}

export default Projects
