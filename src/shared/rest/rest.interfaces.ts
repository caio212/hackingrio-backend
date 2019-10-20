export interface Enrollment {
    enrollmentStatus : 'Enrolled' | 'Enrolling' | 'Training';
    enrollmentsCount: number,
    remainingEnrollments: number,
    phrase: string
}

export interface Verification {
    result : 'Accept' | 'Reject';
    confidence : 'Low' | 'Normal' | 'High';
    phrase: string;
}