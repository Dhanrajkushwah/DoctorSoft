import { Component } from '@angular/core';
import { routes } from 'src/app/core/helpers/routes';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss'],
})
export class DragDropComponent {
  public routes = routes;

  public dragCardOne = [
    {
      tittle: 'Draggable Card 1',
      content:
        'Jelly beans sugar plum cheesecake cookie oat cake soufflé.Tootsie roll bonbon liquorice tiramisu pie powder.Donut sweet roll marzipan pastry cookie cake tootsie roll oat cake cookie.',
    },
    {
      tittle: 'Draggable Card 2',
      content:
        'Jelly beans sugar plum cheesecake cookie oat cake soufflé.Tootsie roll bonbon liquorice tiramisu pie powder.Donut sweet roll marzipan pastry cookie cake tootsie roll oat cake cookie.',
    },
    {
      tittle: 'Draggable Card 3',
      content:
        'Jelly beans sugar plum cheesecake cookie oat cake soufflé.Tootsie roll bonbon liquorice tiramisu pie powder.Donut sweet roll marzipan pastry cookie cake tootsie roll oat cake cookie.',
    },
  ];
  public basicListGroup = [
    {
      tittle: 'Darren Elder',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
    },
    {
      tittle: 'Linda Ellis',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
    },
    {
      tittle: 'Toney Ritch',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
    },
    {
      tittle: 'Flora Jag',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
    },
    {
      tittle: 'Linda Marris',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
    },
  ];

  public todoList = [
    'Cras justo odio',
    'Dapibus ac facilisis in',
    'Morbi leo risus',
    'Porta ac consectetur ac',
    'Vestibulum at eros',
  ];
  public doneList = [
    'Cras justo odio',
    'Dapibus ac facilisis in',
    'Morbi leo risus',
    'Porta ac consectetur ac',
    'Vestibulum at eros',
  ];
  drop(event: CdkDragDrop<''>) {
    moveItemInArray(
      this.basicListGroup,
      event.previousIndex,
      event.currentIndex
    );
  }

  dropTodo(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
