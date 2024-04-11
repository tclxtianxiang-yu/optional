class Optional<T> {
  private readonly value: T;

  constructor(value: any) {
    this.value = value;
  }

  public static of<T>(value: T | null): Optional<T | null> {
    return new Optional(value);
  }

  public get(): T {
    return this.value;
  }
}

export default Optional;
