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
}

export default Projects
