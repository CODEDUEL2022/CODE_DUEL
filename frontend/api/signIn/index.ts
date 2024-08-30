/* eslint-disable */
import type { DefineMethods } from 'aspida';
import type * as Types from '../@types';

export type Methods = DefineMethods<{
  /** ログインを行う。ブラウザにidが保存されている場合にリクエストが送られる。 */
  post: {
    status: 200;
    /** OK */
    resBody: Types.User;

    reqBody: {
      user_id?: string | undefined;
      user_name?: string | undefined;
    };
  };
}>;
