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

// export const MeetingRooms: MeetingRoom[] = [
//   { id: 101, name: '戈多滑', size: '40', projector: false, TV: true },
//   { id: 102, name: '戈多滑2', size: '40', projector: false, TV: true },
//   { id: 103, name: '戈多滑3', size: '40', projector: true, TV: true },
//   { id: 104, name: '戈多滑4', size: '40', projector: true, TV: true },
//   { id: 105, name: '戈多滑5', size: '40', projector: false, TV: true }
// ]
