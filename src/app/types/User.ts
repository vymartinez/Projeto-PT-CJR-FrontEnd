interface User {
    id: number;
    name: string;
    email: string;
    department: string;
    course: string;
    photo?: Buffer;
    assessments: Assessment;
    created_at: string;
    updatedAt: string;
}