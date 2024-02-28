const env = import.meta.env;
const requiredVariables: Array<string> = [
  /**
   * Add your required environment variables in here.
   */
  'VITE_API_URL',
];
requiredVariables.forEach(function (name: string) {
  if (!env[name]) {
    throw Error(`Env variable "${name}" is not defined.`);
  }
});

function getEnv() {
  return env;
}

export default { getEnv };
