export default (fields, values, snakeCase) => {
  const result = {};

  fields && values && Object.keys(values).forEach(key => {
    const camelCaseKey = _.camelCase(key);
    const snakeCaseKey = _.snakeCase(key);

    if (fields.indexOf(camelCaseKey) > - 1) {
      result[snakeCase ? snakeCaseKey : camelCaseKey] = values[key];
    }
  });

  return result;
};
