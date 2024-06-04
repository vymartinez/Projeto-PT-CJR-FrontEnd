interface Discipline {
    id: number;
    name: string;
    teachersSubjects: [{
        subjectId: number;
        teacherId: number;
        createdAt: string;
        updatedAt: string;
    }];
    createdAt: string;
    updatedAt: string;
}