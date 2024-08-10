import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TasksModule } from './tasks/tasks.module';
import { ProjectsModule } from './projects/projects.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { Task } from './tasks/entities/task.entity';
import { Project } from './projects/entities/project.entity';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { TaskAssignmentsModule } from './task-assignments/task-assignments.module';
import { KanbanColumnsModule } from './kanban-columns/kanban-columns.module';
import { ProjectMembersModule } from './project-members/project-members.module';
import { ProjectMember } from './project-members/entities/project-member.entity';
import { KanbanColumn } from './kanban-columns/entities/kanban-column.entity';
import { TaskAssignment } from './task-assignments/entities/task-assignment.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '',
      database: 'task_management_database',
      entities: [
        User,
        Task,
        Project,
        ProjectMember,
        KanbanColumn,
        TaskAssignment,
      ],
      synchronize: true, // Set to false in production
    }),
    AuthModule,
    UsersModule,
    TasksModule,
    ProjectsModule,
    TaskAssignmentsModule,
    KanbanColumnsModule,
    ProjectMembersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
