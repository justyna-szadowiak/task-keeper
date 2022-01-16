import { Pageable } from "./pageable";
import { Task } from "./task";

export interface TasksResponse {
    exec_time: number;
    response: Pageable<Task[]>;
}
