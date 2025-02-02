import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_protobuf_createAssertEncode_ObjectHttpUndefindable =
    _test_protobuf_assertEncode(
        "ObjectHttpUndefindable",
    )<ObjectHttpUndefindable>(ObjectHttpUndefindable)({
        encode: (input) =>
            typia.protobuf.assertEncode<ObjectHttpUndefindable>(input),
        decode: typia.protobuf.createDecode<ObjectHttpUndefindable>(),
        message: typia.protobuf.message<ObjectHttpUndefindable>(),
    });
