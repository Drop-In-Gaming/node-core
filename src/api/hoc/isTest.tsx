
const isTest = process.env.JEST_WORKER_ID !== undefined;

export default isTest;