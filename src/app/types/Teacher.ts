interface Teacher {
    id: number;
    name: string;
    department: string;
    photo?: Buffer;
    teacherSubjects: {
        subjectId: number;
        teacherId: number;
        createdAt: string;
        updatedAt: string;
    }[];
}
