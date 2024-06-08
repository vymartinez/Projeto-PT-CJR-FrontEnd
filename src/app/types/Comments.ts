interface Comment {
    id: number;
    content: string;
    user: User;
    userId: number;
    assessment: Assessment;
    assessmentId: number;
    created_at: string;
    updated_at: string;
}