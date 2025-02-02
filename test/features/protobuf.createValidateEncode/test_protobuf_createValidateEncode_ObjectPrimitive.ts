import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_protobuf_createValidateEncode_ObjectPrimitive =
    _test_protobuf_validateEncode("ObjectPrimitive")<ObjectPrimitive>(
        ObjectPrimitive,
    )({
        encode: typia.protobuf.createValidateEncode<ObjectPrimitive>(),
        decode: typia.protobuf.createDecode<ObjectPrimitive>(),
        message: typia.protobuf.message<ObjectPrimitive>(),
    });
