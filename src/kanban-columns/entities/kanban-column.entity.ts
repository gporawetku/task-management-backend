import { BaseEntity } from 'src/common/entities/base.entity';
import { Project } from 'src/projects/entities/project.entity';
import { Task } from 'src/tasks/entities/task.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class KanbanColumn extends BaseEntity {
  @Column()
  name: string;

  @Column()
  position: number;

  @ManyToOne(() => Project, (project) => project.kanbanColumns)
  @JoinColumn({ name: 'project_id' })
  project: Project;

  @OneToMany(() => Task, (task) => task.kanbanColumn)
  tasks: Task[];
}
