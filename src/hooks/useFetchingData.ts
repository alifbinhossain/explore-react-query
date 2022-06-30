import { getData } from '@utlis/getData';
import { AxiosResponse } from 'axios';
import { useQuery, UseQueryResult } from 'react-query';

interface FetchingDataProps {
  name: string;
  url: string;
  options?: {
    enabled?: boolean;
    staleTime?: number;
    cacheTime?: number;
    suspense?: boolean;
    refetchOnMount?: boolean | 'always';
    refetchInterval?: number | false;
    refetchOnWindowFocus?: boolean | 'always';
    refetchIntervalInBackground?: boolean;
    select?: (data: AxiosResponse<any, any>) => any;
    onSuccess?: (data: any) => void;
    onError?: (err: unknown) => void;
  };
}

export const useFetchingData = (props: FetchingDataProps): any => {
  const { name, url, options } = props;

  return useQuery(name, () => getData(url), {
    enabled: options?.enabled,
    staleTime: options?.staleTime,
    cacheTime: options?.cacheTime,
    suspense: options?.suspense,
    refetchInterval: options?.refetchInterval,
    refetchOnMount: options?.refetchOnMount,
    refetchOnWindowFocus: options?.refetchOnWindowFocus,
    refetchIntervalInBackground: options?.refetchIntervalInBackground,
    select: options?.select,
    onSuccess: options?.onSuccess,
    onError: options?.onError,
  });
};
