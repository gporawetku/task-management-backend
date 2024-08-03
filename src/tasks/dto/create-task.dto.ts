import { IsDate, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export enum TaskStatus {
  PENDING = 'pending',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
  ON_HOLD = 'on_hold',
  FAILED = 'failed',
}

export enum TaskPriority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  CRITICAL = 'critical',
}

export class CreateTaskDto {
  @IsNotEmpty()
  title: string;

  @IsString()
  description: string;

  @IsEnum(TaskStatus)
  status: TaskStatus;

  @IsDate()
  dueDate: Date;

  @IsEnum(TaskPriority)
  priority: TaskPriority;
}
