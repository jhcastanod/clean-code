const storage = new Map();

export function Memo() {
  return (target: Object, method: string, descriptor: TypedPropertyDescriptor<any>): void => {
    const originMethod = descriptor.value;

    descriptor.value = function(...args) {
      const num = args[0];
      const valueIsCached = storage.has(num);

      if (valueIsCached) {
        const cachedValue = storage.get(num);

        return cachedValue;
      }

      const resolvedValue = originMethod.apply(this, args);
      storage.set(num, resolvedValue);

      return resolvedValue;
    };
  };
}