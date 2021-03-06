import { RxBaseTemplateNames, RxViewContext } from '../../../cdk';

export interface RxLetViewContext<T> extends RxViewContext<T> {
  // to enable `as` syntax we have to assign the directives selector (var as v)
  rxLet: T;
}

export const RxIfTemplateNames = {
  ...RxBaseTemplateNames
} as const;

