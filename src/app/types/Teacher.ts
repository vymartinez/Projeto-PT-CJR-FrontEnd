interface Teacher {
    id: number;
    name: string;
    department: string;
    photo?: {
        type: string;
        data: number[];
    };
    teacherSubjects: {
        subjectId: number;
        teacherId: number;
        created_at: string;
        updated_at: string;
    }[];
}
