import { BaseEntity } from 'src/common/entities/base.entity';
import { Task } from 'src/tasks/entities/task.entity';
import { User } from 'src/users/entities/user.entity';
import { Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity()
export class TaskAssignment extends BaseEntity {
  @ManyToOne(() => Task, (task) => task.taskAssignments)
  @JoinColumn({ name: 'task_id' })
  task: Task;

  @ManyToOne(() => User, (user) => user.taskAssignments)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
