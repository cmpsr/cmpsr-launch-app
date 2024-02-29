import apiClient from '../client/api';

export type GetHealthResponse = {
  status: string;
};

async function get(): Promise<GetHealthResponse> {
  const res = await apiClient.get('/health');
  return res.data;
}

export default { get };
