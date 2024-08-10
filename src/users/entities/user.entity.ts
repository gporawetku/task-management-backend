import * as bcrypt from 'bcrypt';
import { BeforeInsert, Column, Entity, OneToMany } from 'typeorm';
import { Task } from 'src/tasks/entities/task.entity';
import { Project } from 'src/projects/entities/project.entity';
import { BaseEntity } from 'src/common/entities/base.entity';
import { TaskAssignment } from 'src/task-assignments/entities/task-assignment.entity';
import { ProjectMember } from 'src/project-members/entities/project-member.entity';

@Entity()
export class User extends BaseEntity {
  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  password: string;

  @OneToMany(() => Task, (task) => task.user)
  tasks: Task[];

  @OneToMany(() => Project, (project) => project.user)
  projects: Project[];

  @OneToMany(() => ProjectMember, (projectMember) => projectMember.user)
  projectMembers: ProjectMember[];

  @OneToMany(() => TaskAssignment, (taskAssignment) => taskAssignment.user)
  taskAssignments: TaskAssignment[];

  @BeforeInsert()
  async hashPassword(): Promise<void> {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
  }
}
