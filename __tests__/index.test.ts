import Optional from "../src";

describe("Optional", () => {
  describe("of", () => {
    test("should return an Optional with the given value", () => {
      expect(Optional.of(1).get()).toBe(1);
    });

    test("should throw an error if the value is null or undefined", () => {
      expect(() => Optional.of(null)).toThrow();
      expect(() => Optional.of(undefined)).toThrow();
    });
  });

  describe("empty", () => {
    test("should return an Optional with no value", () => {
      expect(Optional.empty().isEmpty()).toBe(true);
    });
  });

  describe("ofNullable", () => {
    test("should return an Optional with the given value if it is not null or undefined", () => {
      expect(Optional.ofNullable(1).get()).toBe(1);
    });

    test("should return an Optional with no value if the given value is null or undefined", () => {
      expect(Optional.ofNullable(null).isEmpty()).toBe(true);
      expect(Optional.ofNullable(undefined).isEmpty()).toBe(true);
    });
  });

  describe("get", () => {
    test("should return the value if it is present", () => {
      expect(Optional.of(1).get()).toBe(1);
    });

    test("should throw an error if the value is not present", () => {
      expect(() => Optional.empty().get()).toThrow();
    });
  });

  describe("map", () => {
    test("should return a new Optional with the result of the mapping function if the value is present", () => {
      const mapper = (value: number) => value * 2;
      expect(Optional.of(2).map(mapper).get()).toBe(4);
    });

    test("should return an empty Optional if the value is not present", () => {
      const mapper = (value: number) => value * 2;
      expect(Optional.empty<number>().map(mapper).isEmpty()).toBe(true);
    });
  });

  describe("isPresent", () => {
    test("should return true if the value is present", () => {
      expect(Optional.of(1).isPresent()).toBe(true);
    });

    test("should return false if the value is not present", () => {
      expect(Optional.empty().isPresent()).toBe(false);
    });
  });

  describe("ifPresent", () => {
    test("should call the given function with the value if it is present", () => {
      const mockFn = jest.fn();
      Optional.of(1).ifPresent(mockFn);
      expect(mockFn).toHaveBeenCalledWith(1);
    });

    test("should not call the given function if the value is not present", () => {
      const mockFn = jest.fn();
      Optional.empty().ifPresent(mockFn);
      expect(mockFn).not.toHaveBeenCalled();
    });
  });

  describe("ifPresentOrElse", () => {
    test("should call the first function with the value if it is present", () => {
      const mockFn = jest.fn();
      const mockFn2 = jest.fn();
      Optional.of(1).ifPresentOrElse(mockFn, mockFn2);
      expect(mockFn).toHaveBeenCalledWith(1);
      expect(mockFn2).not.toHaveBeenCalled();
    });

    test("should call the second function if the value is not present", () => {
      const mockFn = jest.fn();
      const mockFn2 = jest.fn();
      Optional.empty().ifPresentOrElse(mockFn, mockFn2);
      expect(mockFn).not.toHaveBeenCalled();
      expect(mockFn2).toHaveBeenCalled();
    });
  });

  describe("orElse", () => {
    test("should return the value if it is present", () => {
      expect(Optional.of(1).orElse(2)).toBe(1);
    });

    test("should return the other value if the value is not present", () => {
      expect(Optional.empty().orElse(2)).toBe(2);
    });
  });

  describe("orElseGet", () => {
    test("should return the value if it is present", () => {
      expect(Optional.of(1).orElseGet(() => 2)).toBe(1);
    });

    test("should return the value from the given function if the value is not present", () => {
      expect(Optional.empty().orElseGet(() => 2)).toBe(2);
    });
  });

  describe("orElseThrow", () => {
    test("should return the value if it is present", () => {
      expect(Optional.of(1).orElseThrow(() => new Error())).toBe(1);
    });

    test("should throw the error from the given function if the value is not present", () => {
      expect(() => Optional.empty().orElseThrow(() => new Error())).toThrow();
    });
  });
});
