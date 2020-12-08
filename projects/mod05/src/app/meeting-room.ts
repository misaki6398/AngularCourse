export class MeetingRoom {
  id: number;
  name: string;
  size: string;
  projector?: boolean;
  TV?: boolean;

  constructor(
    id: number,
    name: string,
    size: string,
    projector?: boolean,
    TV?: boolean
  ) {
    this.id = id;
    this.name = name;
    this.size = size;
    this.projector = projector;
    this.TV = TV;
  }

}
