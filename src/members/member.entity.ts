export class Member {
  memberId: string;
  userId: string;
  gameId: string;
  weightGoal: number;
  vacationStartDate: string;
  status: string;

  constructor(partial: Partial<Member>) {
    Object.assign(this, partial);
  }
}
