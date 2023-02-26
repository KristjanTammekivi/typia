import typia from "../../../../src";
import { _test_validateClone } from "../../../internal/_test_validateClone";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";

export const test_validateClone_ObjectGenericAlias = _test_validateClone(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    (input) =>
        ((
            input: any,
        ): typia.IValidation<
            typia.Primitive<ObjectGenericAlias.ISomething<string>>
        > => {
            const validate = (
                input: any,
            ): typia.IValidation<ObjectGenericAlias.Alias> => {
                const errors = [] as any[];
                const $report = (typia.validateClone as any).report(errors);
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ObjectGenericAlias.Alias => {
                    const $vo0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            "string" === typeof input.value ||
                                $report(_exceptionable, {
                                    path: _path + ".value",
                                    expected: "string",
                                    value: input.value,
                                }),
                        ].every((flag: boolean) => flag);
                    return (
                        ((("object" === typeof input && null !== input) ||
                            $report(true, {
                                path: _path + "",
                                expected: "Resolve<ObjectGenericAlias.Alias>",
                                value: input,
                            })) &&
                            $vo0(input, _path + "", true)) ||
                        $report(true, {
                            path: _path + "",
                            expected: "Resolve<ObjectGenericAlias.Alias>",
                            value: input,
                        })
                    );
                })(input, "$input", true);
                const success = 0 === errors.length;
                return {
                    success,
                    errors,
                    data: success ? input : undefined,
                } as any;
            };
            const clone = (
                input: ObjectGenericAlias.Alias,
            ): typia.Primitive<ObjectGenericAlias.Alias> => {
                const $co0 = (input: any): any => ({
                    value: input.value as any,
                });
                return "object" === typeof input && null !== input
                    ? $co0(input)
                    : (input as any);
            };
            const output = validate(input) as any;
            if (output.success) output.data = clone(input);
            return output;
        })(input),
    ObjectGenericAlias.SPOILERS,
);
