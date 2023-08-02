import { createAction, props } from '@ngrx/store';

export const enterNumber = createAction(
    '[Caculator] Enter Number',
    props<{ number: string }>()
);

export const enterOperator = createAction(
    '[Caculator] Enter Operator',
    props<{ operator: string }>()
);


export const swap = createAction
