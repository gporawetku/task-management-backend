import { BaseEntity } from 'src/common/entities/base.entity';
import { KanbanColumn } from 'src/kanban-columns/entities/kanban-column.entity';
import { Project } from 'src/projects/entities/project.entity';
import { TaskAssignment } from 'src/task-assignments/entities/task-assignment.entity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Task extends BaseEntity {
  @Column()
  title: string;

  @Column({ nullable: true })
  description: string;

  @Column({ name: 'due_date', type: 'timestamp', nullable: true })
  dueDate: Date;

  @ManyToOne(() => User, (user) => user.tasks)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Project, (project) => project.tasks, { nullable: true })
  @JoinColumn({ name: 'project_id' })
  project: Project;

  @ManyToOne(() => KanbanColumn, (kanbanColumn) => kanbanColumn.tasks)
  @JoinColumn({ name: 'kanban_column_id' })
  kanbanColumn: KanbanColumn;

  @OneToMany(() => TaskAssignment, (taskAssignment) => taskAssignment.task)
  taskAssignments: TaskAssignment[];
}
