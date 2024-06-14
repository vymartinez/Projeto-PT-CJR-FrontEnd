type PostAssessmentProps = {
    content: string;
    userId: number;
    teacherId: number;
    subjectId: number;
  }

  type JWTProps = {
      sub: number;
  }
    
  type PostCommentProps = {
    content: string;
    userId: number;
    assessmentId: number;
  }
  
  type PatchCommentProps = {
    content?: string;
    userId: number;
    assessmentId: number;
    commentId: number;
  }
  
  type PatchAssessmentProps = {
    content?: string;
    userId: number;
    teacherId: number;
    subjectId: number;
    assessmentId: number;
  }
  
  type PatchUserProps = {
    values: EditProfile,
    userId: number;
    accessToken: string;
  }
  
  type CreateUserProps = {
    email: string;
    name: string;
    department: string;
    course: string;
    password: string;
  }