import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { KanbanColumnsService } from './kanban-columns.service';
import { CreateKanbanColumnDto } from './dto/create-kanban-column.dto';
import { UpdateKanbanColumnDto } from './dto/update-kanban-column.dto';

@Controller('kanban-columns')
export class KanbanColumnsController {
  constructor(private readonly kanbanColumnsService: KanbanColumnsService) {}

  @Post()
  create(@Body() createKanbanColumnDto: CreateKanbanColumnDto) {
    return this.kanbanColumnsService.create(createKanbanColumnDto);
  }

  @Get()
  findAll() {
    return this.kanbanColumnsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.kanbanColumnsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateKanbanColumnDto: UpdateKanbanColumnDto) {
    return this.kanbanColumnsService.update(+id, updateKanbanColumnDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.kanbanColumnsService.remove(+id);
  }
}
