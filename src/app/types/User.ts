interface User {
    id: number;
    name: string;
    email: string;
    department: string;
    course: string;
    photo: Buffer;
    assessments: Assessment[];
    createdAt: string;
    updatedAt: string;
}