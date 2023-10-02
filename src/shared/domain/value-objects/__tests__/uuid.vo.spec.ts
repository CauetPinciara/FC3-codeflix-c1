import { InvalidUuidError, Uuid } from "../uuid.vo";
import { validate as uuidValidate } from "uuid";

describe("Uuid Unit Tests", () => {
  const validadeSpy = jest.spyOn(Uuid.prototype as any, "validate");

  it("Should throw error if uuid is invalid", () => {
    expect(() => {
      new Uuid("invalid-uuid");
    }).toThrowError(new InvalidUuidError());
    expect(validadeSpy).toHaveBeenCalledTimes(1);
  });

  it("Should create a valid uuid", () => {
    const uuid = new Uuid();
    expect(uuid.id).toBeDefined();
    expect(uuidValidate(uuid.id)).toBeTruthy();
    expect(validadeSpy).toHaveBeenCalledTimes(1);
  });

  it("Should accept a valid uuid", () => {
    const uuid = new Uuid("a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11");
    expect(uuid.id).toBe("a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11");
    expect(validadeSpy).toHaveBeenCalledTimes(1);
  });
});
