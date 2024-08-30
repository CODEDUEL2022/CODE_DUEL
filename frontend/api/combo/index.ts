/* eslint-disable */
import type { DefineMethods } from 'aspida';
import type * as Types from '../@types';

export type Methods = DefineMethods<{
  /** コンボを取得する */
  get: {
    query: {
      /** カードのID */
      cards: number[];
    };

    status: 200;
    /** OK */
    resBody: Types.Combo[];
  };
}>;
