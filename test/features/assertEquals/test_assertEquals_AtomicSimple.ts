import typia from "../../../src";
import { AtomicSimple } from "../../structures/AtomicSimple";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_assertEquals_AtomicSimple = _test_assertEquals(
    "AtomicSimple",
    AtomicSimple.generate,
    (input) => typia.assertEquals(input),
);
