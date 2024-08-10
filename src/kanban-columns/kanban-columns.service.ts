import { Injectable } from '@nestjs/common';
import { CreateKanbanColumnDto } from './dto/create-kanban-column.dto';
import { UpdateKanbanColumnDto } from './dto/update-kanban-column.dto';

@Injectable()
export class KanbanColumnsService {
  create(createKanbanColumnDto: CreateKanbanColumnDto) {
    return 'This action adds a new kanbanColumn';
  }

  findAll() {
    return `This action returns all kanbanColumns`;
  }

  findOne(id: number) {
    return `This action returns a #${id} kanbanColumn`;
  }

  update(id: number, updateKanbanColumnDto: UpdateKanbanColumnDto) {
    return `This action updates a #${id} kanbanColumn`;
  }

  remove(id: number) {
    return `This action removes a #${id} kanbanColumn`;
  }
}
