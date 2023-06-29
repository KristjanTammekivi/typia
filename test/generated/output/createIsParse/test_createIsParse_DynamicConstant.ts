import typia from "../../../../src";
import { _test_isParse } from "../../../internal/_test_isParse";
import { DynamicConstant } from "../../../structures/DynamicConstant";
export const test_createIsParse_DynamicConstant = _test_isParse("DynamicConstant", DynamicConstant.generate, (input: any): typia.Primitive<DynamicConstant> => { const is = (input: any): input is DynamicConstant => {
    return "object" === typeof input && null !== input && ("number" === typeof (input as any).a && Number.isFinite((input as any).a) && ("number" === typeof (input as any).b && Number.isFinite((input as any).b)) && ("number" === typeof (input as any).c && Number.isFinite((input as any).c)) && ("number" === typeof (input as any).d && Number.isFinite((input as any).d)));
}; input = JSON.parse(input); return is(input) ? input as any : null; }, DynamicConstant.SPOILERS);
