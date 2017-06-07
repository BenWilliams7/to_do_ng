export class Task {
  public done: boolean = false;
  constructor(public description: string, public priority: number) { }
}
//The class annotation, where our template property resides, determines how a component appears, whereas the class declaration defines how it behaves.
