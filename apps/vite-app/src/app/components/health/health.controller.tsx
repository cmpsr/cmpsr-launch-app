import useGetHealth from '@/queries/health.queries';
import { useNavigate } from 'react-router-dom';

export default function useHealthController() {
  const query = useGetHealth();
  const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1);
  }

  return { query, handleGoBack };
}
