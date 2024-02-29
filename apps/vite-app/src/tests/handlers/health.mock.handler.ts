import envService from '@/services/env.service';
import { HttpResponse, http } from 'msw';

export const healthMockHandler = http.get(`${envService.getEnv().VITE_API_URL}/health`, () => {
  return HttpResponse.json({ status: 'dummy_health_status' });
});
