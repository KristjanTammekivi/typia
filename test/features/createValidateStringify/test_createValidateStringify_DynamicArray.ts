import typia from "../../../src";
import { DynamicArray } from "../../structures/DynamicArray";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_DynamicArray =
    _test_validateStringify(
        "DynamicArray",
        DynamicArray.generate,
        typia.createValidateStringify<DynamicArray>(),
        DynamicArray.SPOILERS,
    );
