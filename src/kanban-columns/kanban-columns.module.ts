import { Module } from '@nestjs/common';
import { KanbanColumnsService } from './kanban-columns.service';
import { KanbanColumnsController } from './kanban-columns.controller';

@Module({
  controllers: [KanbanColumnsController],
  providers: [KanbanColumnsService],
})
export class KanbanColumnsModule {}
