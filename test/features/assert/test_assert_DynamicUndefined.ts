import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_assert_DynamicUndefined = _test_assert(
    "DynamicUndefined",
    DynamicUndefined.generate,
    (input) => typia.assert(input),
    DynamicUndefined.SPOILERS,
);
