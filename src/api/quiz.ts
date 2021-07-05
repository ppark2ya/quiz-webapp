import apiClient from './apiClient';
import { IParams, ApiResponse } from './types';

/**
 * @desc 선호 음식점 입력
 * @param id: 사용자 id(Number)
 * @param place_id: 카카오 api에서 넘어온 식당 식별자(Number)
 * @param place_name: 식당이름(String)
 */
export function getOpenApi(params: IParams) {
  return apiClient.get<ApiResponse>(`/amount`, {
    params: {
      ...params,
      type: 'multiple',
    },
  });
}
