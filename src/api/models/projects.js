class Projects {
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
