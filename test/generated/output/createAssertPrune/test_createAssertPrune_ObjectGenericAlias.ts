import typia from "../../../../src";
import { _test_assertPrune } from "../../../internal/_test_assertPrune";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";

export const test_createAssertPrune_ObjectGenericAlias = _test_assertPrune(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    (input: any): ObjectGenericAlias.ISomething<string> => {
        const assert = (input: any): ObjectGenericAlias.Alias => {
            const $guard = (typia.createAssertPrune as any).guard;
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is ObjectGenericAlias.Alias => {
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    "string" === typeof input.value ||
                    $guard(_exceptionable, {
                        path: _path + ".value",
                        expected: "string",
                        value: input.value,
                    });
                return (
                    (("object" === typeof input && null !== input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "Resolve<ObjectGenericAlias.Alias>",
                            value: input,
                        })) &&
                    $ao0(input, _path + "", true)
                );
            })(input, "$input", true);
            return input;
        };
        const prune = (input: ObjectGenericAlias.Alias): void => {
            const $po0 = (input: any): any => {
                for (const key of Object.keys(input)) {
                    if ("value" === key) continue;
                    delete input[key];
                }
            };
            if ("object" === typeof input && null !== input) $po0(input);
        };
        assert(input);
        prune(input);
        return input;
    },
    ObjectGenericAlias.SPOILERS,
);
