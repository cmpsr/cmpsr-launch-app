import { useQuery } from '@tanstack/react-query';
import healthRepository from '../repositories/health.repository';

function useGetHealth() {
  return useQuery({
    queryKey: ['health', 'get'],
    queryFn: healthRepository.get,
  });
}

export default useGetHealth;
