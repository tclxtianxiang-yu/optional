/**
 * Optional类
 */
class Optional<T> {
  private constructor(private value: T | null | undefined) {}

  /**
   * 创建一个包含非空值的Optional对象
   * @param value
   */
  public static of<T>(value: T): Optional<T> {
    if (value === null || value === undefined) {
      throw new Error("value cannot be null or undefined");
    }
    return new Optional(value);
  }

  /**
   * 创建一个不包含值的Optional对象
   */
  public static empty<T>(): Optional<T> {
    return new Optional<T>(null);
  }

  /**
   * 创建一个Optional对象，如果非空值则包含该值，否则不包含值
   * @param value
   */
  public static ofNullable<T>(value: T): Optional<T> {
    return new Optional(value);
  }

  /**
   * 如果存在值，则返回值，否则抛出异常
   */
  public get(): T {
    if (this.isEmpty()) {
      throw new Error("No value present");
    }
    return this.value!;
  }

  /**
   * 如果值不存在则返回true，否则返回false
   */
  public isEmpty(): boolean {
    return this.value === null || this.value === undefined;
  }

  /**
   * 如果值存在则返回true，否则返回false
   */
  public isPresent(): boolean {
    return this.value !== null && this.value !== undefined;
  }

  /**
   * 如果值存在，使用该值调用指定的consumer，否则不执行任何操作
   * @param consumer
   */
  public ifPresent(consumer: (value: T) => void): void {
    if (this.isPresent()) {
      consumer(this.value!);
    }
  }

  /**
   * 如果存在值，则返回该值，否则返回other
   * @param other
   */
  public orElse(other: T): T {
    return this.isPresent() ? (this.value! as T) : other;
  }

  /**
   * 如果存在值，则返回该值，否则使用supplier提供的值
   * @param supplier
   */
  public orElseGet(supplier: () => T): T {
    return this.isPresent() ? this.value! : supplier();
  }

  /**
   * 如果存在值，则返回该值，否则抛出异常
   * @param exceptionSupplier
   */
  public orElseThrow(exceptionSupplier: () => Error): T {
    if (this.isEmpty()) {
      throw exceptionSupplier();
    }
    return this.value!;
  }
}

export default Optional;
