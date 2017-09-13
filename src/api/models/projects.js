class Projects {
  /**
   * @param {{
   *   description: (string),
   *   name: (string)
   * }} values
   * @return {{}}
   */
  static async create(values) {
    const project = await Client.user.newProject(Projects.fromJson(values))
        , response = await project.saveToDB();

    return Projects.toJson(project.toJson());
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
    const project = await Client.Project.createFromDB(address, id);
    project.raw = { ...project.raw, ...Projects.fromJson(values)};
    await project.saveToDB();

    return Projects.toJson(project.toJson());
  }

  static async getByAddress(address) {
    const projects = await Client.Project.getProjects(address);

    return projects.map(project => Projects.toJson(project.toJson()));
  }

  static fromJson({ dateEnd, dateStart, description, name }) {
    return {
      date_end: dateEnd,
      date_start: dateStart,
      description, name
    };
  }

  static toJson({
    __address,
    date_end, date_start,
    description, id, name
  }) {
    return {
      address: __address,
      dateEnd: date_end,
      dateStart: date_start,
      description, id, name
    };
  }
}

export default Projects
