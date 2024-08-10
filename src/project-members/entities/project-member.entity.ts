import { BaseEntity } from 'src/common/entities/base.entity';
import { Project } from 'src/projects/entities/project.entity';
import { User } from 'src/users/entities/user.entity';
import { Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity()
export class ProjectMember extends BaseEntity {
  @ManyToOne(() => Project, (project) => project.projectMembers)
  @JoinColumn({ name: 'project_id' })
  project: Project;

  @ManyToOne(() => User, (user) => user.projectMembers)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
