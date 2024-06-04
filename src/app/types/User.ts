interface User {
    id: number;
    name: string;
    email: string;
    department: string;
    course: string;
    photo?: {
        type: string;
        data: number[];
    };
    assessments: Assessment;
    created_at: string;
    updatedAt: string;
}