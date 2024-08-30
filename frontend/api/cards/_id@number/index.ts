/* eslint-disable */
import type { DefineMethods } from 'aspida';
import type * as Types from '../../@types';

export type Methods = DefineMethods<{
  /** カードを取得する */
  get: {
    status: 200;
    /** OK */
    resBody: Types.Card;
  };
}>;
