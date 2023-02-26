import typia from "../../../../src";
import { _test_validateClone } from "../../../internal/_test_validateClone";
import { ObjectLiteralProperty } from "../../../structures/ObjectLiteralProperty";

export const test_validateClone_ObjectLiteralProperty = _test_validateClone(
    "ObjectLiteralProperty",
    ObjectLiteralProperty.generate,
    (input) =>
        ((
            input: any,
        ): typia.IValidation<
            typia.Primitive<ObjectLiteralProperty.ISomething>
        > => {
            const validate = (
                input: any,
            ): typia.IValidation<ObjectLiteralProperty.ISomething> => {
                const errors = [] as any[];
                const $report = (typia.validateClone as any).report(errors);
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ObjectLiteralProperty.ISomething => {
                    const $vo0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            "string" ===
                                typeof input[
                                    "something-interesting-do-you-want?"
                                ] ||
                                $report(_exceptionable, {
                                    path:
                                        _path +
                                        '["something-interesting-do-you-want?"]',
                                    expected: "string",
                                    value: input[
                                        "something-interesting-do-you-want?"
                                    ],
                                }),
                            "string" ===
                                typeof input[
                                    "or-something-crazy-do-you-want?"
                                ] ||
                                $report(_exceptionable, {
                                    path:
                                        _path +
                                        '["or-something-crazy-do-you-want?"]',
                                    expected: "string",
                                    value: input[
                                        "or-something-crazy-do-you-want?"
                                    ],
                                }),
                        ].every((flag: boolean) => flag);
                    return (
                        ((("object" === typeof input && null !== input) ||
                            $report(true, {
                                path: _path + "",
                                expected:
                                    "Resolve<ObjectLiteralProperty.ISomething>",
                                value: input,
                            })) &&
                            $vo0(input, _path + "", true)) ||
                        $report(true, {
                            path: _path + "",
                            expected:
                                "Resolve<ObjectLiteralProperty.ISomething>",
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
                input: ObjectLiteralProperty.ISomething,
            ): typia.Primitive<ObjectLiteralProperty.ISomething> => {
                const $co0 = (input: any): any => ({
                    "something-interesting-do-you-want?": input[
                        "something-interesting-do-you-want?"
                    ] as any,
                    "or-something-crazy-do-you-want?": input[
                        "or-something-crazy-do-you-want?"
                    ] as any,
                });
                return "object" === typeof input && null !== input
                    ? $co0(input)
                    : (input as any);
            };
            const output = validate(input) as any;
            if (output.success) output.data = clone(input);
            return output;
        })(input),
    ObjectLiteralProperty.SPOILERS,
);
