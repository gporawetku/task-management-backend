import { Entity, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { BaseEntity } from 'src/common/entities/base.entity';
import { Task } from 'src/tasks/entities/task.entity';
import { KanbanColumn } from 'src/kanban-columns/entities/kanban-column.entity';
import { User } from 'src/users/entities/user.entity';
import { ProjectMember } from 'src/project-members/entities/project-member.entity';

@Entity()
export class Project extends BaseEntity {
  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @ManyToOne(() => User, (user) => user.projects)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @OneToMany(() => Task, (task) => task.project)
  tasks: Task[];

  @OneToMany(() => ProjectMember, (projectMember) => projectMember.project)
  projectMembers: ProjectMember[];

  @OneToMany(() => KanbanColumn, (kanbanColumn) => kanbanColumn.project)
  kanbanColumns: KanbanColumn[];
}
