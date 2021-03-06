import apiClient from './apiClient';
import { IParams, ApiResponse } from './types';

/**
 * @desc 퀴즈 질문 리스트 조회
 * @param amount: 퀴즈 개수(number)
 * @param category: 퀴즈 카테고리(number 9 ~ 32)
 * @param difficulty: 난이도('easy' | 'medium' | 'hard')
 * @result if response_code is 0: IResults[]
 */
export function getOpenApi(params: IParams) {
  return apiClient.get<ApiResponse>(`/amount`, {
    params: {
      ...params,
      type: 'multiple',
    },
  });
}

/**
 * test 전용 함수
 * @param params IParams
 * @returns
 */
export async function getOpenApiTest(params: IParams) {
  try {
    const { data } = await apiClient.get<ApiResponse>(`/amount`, {
      params: {
        ...params,
        type: 'multiple',
      },
    });
    return data;
  } catch (e) {
    return {
      response_code: 1,
    } as ApiResponse;
  }
}
