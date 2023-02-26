import ts from "typescript";

import { IdentifierFactory } from "../factories/IdentifierFactory";
import { StatementFactory } from "../factories/StatementFactory";
import { TypeFactory } from "../factories/TypeFactory";

import { IProject } from "../transformers/IProject";

import { CloneProgrammer } from "./CloneProgrammer";
import { ValidateProgrammer } from "./ValidateProgrammer";

export namespace ValidateCloneProgrammer {
    export const generate =
        (project: IProject, modulo: ts.LeftHandSideExpression) =>
        (type: ts.Type, name?: string) =>
            ts.factory.createArrowFunction(
                undefined,
                undefined,
                [
                    IdentifierFactory.parameter(
                        "input",
                        TypeFactory.keyword("any"),
                    ),
                ],
                ts.factory.createTypeReferenceNode(
                    `typia.IValidation<typia.Primitive<${
                        name ?? TypeFactory.getFullName(project.checker, type)
                    }>>`,
                ),
                undefined,
                ts.factory.createBlock([
                    StatementFactory.constant(
                        "validate",
                        ValidateProgrammer.generate(
                            {
                                ...project,
                                options: {
                                    ...project.options,
                                    functional: false,
                                    numeric: true,
                                },
                            },
                            modulo,
                        )(type),
                    ),
                    StatementFactory.constant(
                        "clone",
                        CloneProgrammer.generate(
                            {
                                ...project,
                                options: {
                                    ...project.options,
                                    functional: false,
                                    numeric: false,
                                },
                            },
                            modulo,
                        )(type),
                    ),
                    StatementFactory.constant(
                        "output",
                        ts.factory.createAsExpression(
                            ts.factory.createCallExpression(
                                ts.factory.createIdentifier("validate"),
                                undefined,
                                [ts.factory.createIdentifier("input")],
                            ),
                            TypeFactory.keyword("any"),
                        ),
                    ),
                    ts.factory.createIfStatement(
                        ts.factory.createIdentifier("output.success"),
                        ts.factory.createExpressionStatement(
                            ts.factory.createBinaryExpression(
                                ts.factory.createIdentifier("output.data"),
                                ts.SyntaxKind.EqualsToken,
                                ts.factory.createCallExpression(
                                    ts.factory.createIdentifier("clone"),
                                    undefined,
                                    [ts.factory.createIdentifier("input")],
                                ),
                            ),
                        ),
                    ),
                    ts.factory.createReturnStatement(
                        ts.factory.createIdentifier("output"),
                    ),
                ]),
            );
}
