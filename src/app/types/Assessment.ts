interface Assessment {
    id: number;
    content: string;
    user: User;
    userId: number;
    teacher: Teacher;
    teacherId: number;
    subject: Discipline;
    subjectId: number;
    comments: Comment[];
    created_at: string;
    updated_at: string;
}