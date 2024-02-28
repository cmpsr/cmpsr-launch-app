function getEnv() {
  const env = import.meta.env;
  const requiredVariables: Array<string> = [
    /**
     * Add your required environment variables in here.
     */
  ];
  requiredVariables.forEach(function (name: string) {
    if (!env[name]) {
      throw Error(`Env variable "${name}" is not defined.`);
    }
  });

  return env;
}

export default { getEnv };
