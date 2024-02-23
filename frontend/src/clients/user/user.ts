/**
 * Generated by orval v6.25.0 🍺
 * Do not edit manually.
 * CODE_DUEL API
 * CODE_DUELのAPI仕様書です。
 * OpenAPI spec version: 1.0
 */
import axios from 'axios'
import type {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse
} from 'axios'
import type {
  Arguments
} from 'swr'
import useSWRMutation from 'swr/mutation'
import type {
  SWRMutationConfiguration
} from 'swr/mutation'
import type {
  SignInBody,
  SignUpBody,
  User
} from '../index.schemas'


  
  /**
 * ユーザーの登録を行う。初回アクセス時のみフロントからリクエストが送られる。
 * @summary ユーザー登録
 */
export const signUp = (
    signUpBody: SignUpBody, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<User>> => {
    return axios.post(
      `/signUp`,
      signUpBody,options
    );
  }



export const getSignUpMutationFetcher = ( options?: AxiosRequestConfig) => {
  return (_: string, { arg }: { arg: Arguments }): Promise<AxiosResponse<User>> => {
    return signUp(arg as SignUpBody, options);
  }
}
export const getSignUpMutationKey = () => `/signUp` as const;

export type SignUpMutationResult = NonNullable<Awaited<ReturnType<typeof signUp>>>
export type SignUpMutationError = AxiosError<unknown>

/**
 * @summary ユーザー登録
 */
export const useSignUp = <TError = AxiosError<unknown>>(
   options?: { swr?:SWRMutationConfiguration<Awaited<ReturnType<typeof signUp>>, TError, string, Arguments, Awaited<ReturnType<typeof signUp>>> & { swrKey?: string }, axios?: AxiosRequestConfig }
) => {

  const {swr: swrOptions, axios: axiosOptions} = options ?? {}

  const swrKey = swrOptions?.swrKey ?? getSignUpMutationKey();
  const swrFn = getSignUpMutationFetcher(axiosOptions);

  const query = useSWRMutation(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}
/**
 * ログインを行う。ブラウザにidが保存されている場合にリクエストが送られる。
 * @summary ユーザーログイン
 */
export const signIn = (
    signInBody: SignInBody, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<User>> => {
    return axios.post(
      `/signIn`,
      signInBody,options
    );
  }



export const getSignInMutationFetcher = ( options?: AxiosRequestConfig) => {
  return (_: string, { arg }: { arg: Arguments }): Promise<AxiosResponse<User>> => {
    return signIn(arg as SignInBody, options);
  }
}
export const getSignInMutationKey = () => `/signIn` as const;

export type SignInMutationResult = NonNullable<Awaited<ReturnType<typeof signIn>>>
export type SignInMutationError = AxiosError<unknown>

/**
 * @summary ユーザーログイン
 */
export const useSignIn = <TError = AxiosError<unknown>>(
   options?: { swr?:SWRMutationConfiguration<Awaited<ReturnType<typeof signIn>>, TError, string, Arguments, Awaited<ReturnType<typeof signIn>>> & { swrKey?: string }, axios?: AxiosRequestConfig }
) => {

  const {swr: swrOptions, axios: axiosOptions} = options ?? {}

  const swrKey = swrOptions?.swrKey ?? getSignInMutationKey();
  const swrFn = getSignInMutationFetcher(axiosOptions);

  const query = useSWRMutation(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}
