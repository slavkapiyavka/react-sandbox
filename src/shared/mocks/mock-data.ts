import { ComponentsDataKeys as Keys } from "../types/enums";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const componentsData = new Map<Keys, any>([
  [Keys.numberData, 42],
  [Keys.stringData, "kek"],
  [Keys.booleanData, true],
  [
    Keys.objectData,
    {
      name: "John",
      age: 42,
    },
  ],
  [Keys.functionData, () => "function component works!"],
  [Keys.arrayData, ["lol", "kek", "4eburek"]],
]);
