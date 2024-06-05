interface Discipline {
    id: number;
    name: string;
    teachersSubjects: [{
        subjectId: number;
        teacherId: number;
        created_at: string;
        updated_at: string;
    }];
    created_at: string;
    updated_at: string;
}