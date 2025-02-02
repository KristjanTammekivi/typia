import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_misc_createValidateClone_ArrayRecursiveUnionImplicit =
    _test_misc_validateClone(
        "ArrayRecursiveUnionImplicit",
    )<ArrayRecursiveUnionImplicit>(ArrayRecursiveUnionImplicit)(
        typia.misc.createValidateClone<ArrayRecursiveUnionImplicit>(),
    );
