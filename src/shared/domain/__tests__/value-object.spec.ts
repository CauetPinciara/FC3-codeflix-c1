import { ValueObject } from "../value-object";

class StringValueObject extends ValueObject {
  constructor(readonly value: string) {
    super();
  }
}

class ComplextValueObject extends ValueObject {
  constructor(readonly prop1: string, readonly prop2: number) {
    super();
  }
}

describe("ValueObject Unit Tests", () => {
  it("Should be equals", () => {
    const valueObject1 = new StringValueObject("test");
    const valueObject2 = new StringValueObject("test");
    expect(valueObject1.equals(valueObject2)).toBeTruthy();

    const complextValueObject1 = new ComplextValueObject("test", 1);
    const complextValueObject2 = new ComplextValueObject("test", 1);
    expect(complextValueObject1.equals(complextValueObject2)).toBeTruthy();
  });

  it("Should not be equals", () => {
    const valueObject1 = new StringValueObject("test");
    const valueObject2 = new StringValueObject("test2");
    expect(valueObject1.equals(valueObject2)).toBeFalsy();

    expect(valueObject1.equals(null as any)).toBeFalsy();
    expect(valueObject2.equals(undefined as any)).toBeFalsy();

    const complextValueObject1 = new ComplextValueObject("test", 1);
    const complextValueObject2 = new ComplextValueObject("test", 2);
    expect(complextValueObject1.equals(complextValueObject2)).toBeFalsy();

    expect(complextValueObject1.equals(null as any)).toBeFalsy();
    expect(complextValueObject2.equals(undefined as any)).toBeFalsy();
  });
});
