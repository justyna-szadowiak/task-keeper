interface Assigned {
    person_name: string;
    status: string;
}

export interface Task {
    work_order_id: number;
    description: string;
    received_date: string;
    assigned_to: Assigned[];
    status: string;
    priority: string;
}
