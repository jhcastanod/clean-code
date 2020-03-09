export interface IStorage {
  get(value: string): string;
  set(key: string, value: string): void;
}